import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CapsuleApiService, ChannelEvent, EventChannelService, AppSpinnerService, TopicApiService } from '@app/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { CapsuleItem, TopicCategoryItem, TopicItem } from '@app/shared/models';
import { MetadataItem } from '@app/shared/models/capsule-item.model';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { HelperService } from '@app/core/services/common/helper.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-create-capsule',
  templateUrl: './create-capsule.component.html',
  styleUrls: ['./create-capsule.component.scss'],
})
export class CreateCapsuleComponent implements OnInit, AfterViewInit {
  capsuleFormGroup: FormGroup;
  isCreateCapsuleSubmitted: boolean;
  isEditMode: boolean;
  editCapsule: CapsuleItem;
  items = ['cloud'];
  metadata: MetadataItem;
  topics: TopicItem[] = [];
  categories: TopicCategoryItem[] = [];
  expiryCode = [{value: 7, name: 'ONEWEEK'}, {value: 30, name: 'ONEMONTH'},
  {value: 180, name: 'SIXMONTHS'}, {value: 3650, name: 'NOEXPIRY'}];
  tagsValue: string[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  
  constructor(
    private eventChannel: EventChannelService,
    private capsuleApi: CapsuleApiService,
    private spinner: AppSpinnerService,
    private fb: FormBuilder,
    private router: Router,
    private topicApi: TopicApiService,
    private messageService: MessageService,
    private helperService: HelperService
  ) { }

  ngOnInit() {
    this.getMetadata();
    this.getAllTopics();
    this.createCapsuleForm();
    if (this.router.url.includes('editcapsule')) {
      this.isEditMode = true;
      this.editCapsule = JSON.parse(sessionStorage.getItem('capsuleItem'));
      this.capsuleFormGroup.patchValue(this.editCapsule);
      this.tagsValue = this.editCapsule.tags;
      this.capsuleFormGroup.get('tags').setValue([]);
    }
  }

  getAllTopics() {
    this.topicApi.getAllTopics().subscribe(topics => {
      this.topics = topics;
      this.spinner.hide();
    }, error => {
      console.log(' ee', error);
      this.spinner.hide();
    });
  }

  getMetadata() {
    this.capsuleApi.getMetadata().subscribe(data => {
      this.metadata = data;
    });
  }

  createCapsuleForm() {
    this.capsuleFormGroup = this.fb.group({
      capsuleId: [''],
      topicCode: ['', Validators.required],
      category: [''],
      publishedDate: [moment().format('DD/MM/YYYY'), Validators.required],
      title: ['', Validators.required],
      imageUrl: ['', Validators.required],
      duration: [, Validators.required],
      author: [, Validators.required],
      description: ['', Validators.required],
      publisher: ['', Validators.required],
      resourceUrl: ['', Validators.required],
      type: ['', Validators.required],
      audience: [''],
      level: ['', Validators.required],
      expiryDate: [moment().format('DD/MM/YYYY'), Validators.required],
      expiryDateDisp: ['', Validators.required],
      editorsPick: [true],
      tags: [[]],
      keyPoints: [[]]
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.hideAdminNavTabs();
    });
  }

  onCreateCapsule(): void {
    // Testing Purpose
    Object.keys(this.capsuleFormGroup.controls).forEach(key => {
      if(!this.capsuleFormGroup.get(key).valid) {
        console.log(key, this.capsuleFormGroup.get(key).valid, this.capsuleFormGroup.get(key).value);
      }
    });
    this.capsuleFormGroup.markAllAsTouched();
    if (this.capsuleFormGroup.valid) {
      this.spinner.show();
      let requestBody = this.capsuleFormGroup.value;
      // fix this
      const selectedDays = this.expiryCode.find(ex=> ex.name === requestBody.expiryDateDisp);
      requestBody.expiryDate = moment().add(selectedDays.value, 'days').format("DD/MM/YYYY");
      requestBody.editorsPick = requestBody.editorsPick ? 1 : 0;
      console.log('this.tagsValue -->> ',this.tagsValue);
      requestBody.tags = this.tagsValue;
      delete requestBody.expiryDateDisp;
      //delete requestBody.expiryDateDisp;
      this.isCreateCapsuleSubmitted = false;
      if(this.editCapsule) {
        this.updateCapsule(requestBody);
      } else {
        delete requestBody.capsuleId;
        this.createCapsule(requestBody);
      }
    }
  }

  updateCapsule(requestBody) {
    this.capsuleApi.updateCapsule(requestBody).subscribe(data => {
      this.isCreateCapsuleSubmitted = true;
      this.helperService.showSuccess(this.messageService, 'Capsule updated successfully');
      this.spinner.hide();
    }, error => {
      console.log('ERR --- ',error);
      this.helperService.showError(this.messageService);
      this.spinner.hide();
    });
  }

  createCapsule(requestBody) {
    this.capsuleApi.createCapsule(requestBody).subscribe(data => {
      this.capsuleFormGroup.reset();
      this.helperService.showSuccess(this.messageService, 'Capsule created successfully');
      this.isCreateCapsuleSubmitted = true;
      this.spinner.hide();
    }, error => {
      console.log('ERR --- ',error);
      this.helperService.showError(this.messageService);
      this.spinner.hide();
    });
  }

  showAdminCapsulesTab(): void {
    this.eventChannel.publish({ event: ChannelEvent.SetAdminCapsulesNavTab });
  }

  hideAdminNavTabs(): void {
    this.eventChannel.publish({ event: ChannelEvent.HideAdminNavTabs });
  }
  
  public onTagEdited(item) {
    console.log('tag edited: current value is ' + item);
  }

  
  onTopicChange(event) {
    const topicCode = event.target.value;
    if(topicCode) {
      const topic = this.topics.find(topic => topic.code === topicCode);
      this.categories = topic.categories;
      this.capsuleFormGroup.patchValue({
        description: topic.description,
        imageUrl: topic.imageUrl,
        title: topic.title
      })
    }
  }

  
  get tags() {
    return this.capsuleFormGroup.get('tags') as FormControl;
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tagsValue.push(value);
    }

    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.tagsValue.indexOf(tag);

    if (index >= 0) {
      this.tagsValue.splice(index, 1);
    }    
  }
}
