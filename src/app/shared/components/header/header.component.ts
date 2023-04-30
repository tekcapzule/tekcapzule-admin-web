import { ChangeDetectorRef, Component, ElementRef, HostBinding, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

import { TopicApiService, AuthService, AwsUserInfo, ChannelEvent, EventChannelService } from '@app/core';
import { NavTab, TopicItem } from '@app/shared/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger) globalSearchTrigger: MatMenuTrigger;
  @ViewChild('collapseBtn') collapseBtn: ElementRef;
  isLoggedIn = false;
  userDetails: AwsUserInfo = null;
  searchInputValue = '';
  topics: TopicItem[] = [];
  searchedTopics: TopicItem[] = [];
  isMobileResolution: boolean;
  openedMenuItem: NavTab;
  headerMenu: NavTab[] = [
    { uniqueId:'Capsule', displayName: 'Capsule', navUrl:'/capsules'},
    { uniqueId:'TekByte', displayName: 'TekByte', navUrl:'/tekByte'},
    { uniqueId:'Feedback', displayName: 'Feedback', navUrl:'/feedback'},
  ];
  selectedMenuItem: NavTab = { uniqueId:'Capsule', displayName: 'Capsule', navUrl:'/capsules'};

  constructor(
    private auth: AuthService,
    private zone: NgZone,
    private router: Router,
    private topicApi: TopicApiService,
    private eventChannel: EventChannelService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.auth.onLoggedInStatusChange().subscribe(isLoggedIn => {
      this.zone.run(() => {
        this.isLoggedIn = isLoggedIn;
        this.userDetails = this.auth.getAwsUserInfo();
      });
    });

    this.topicApi.getAllTopics().subscribe(data => {
      this.topics = data;
    });
    this.onResize();
  }

  signOutUser(): void {
    this.auth.signOutUser();
  }
  
  @HostBinding('widnow:resize')
  onResize(event = null) {
    this.isMobileResolution = window.innerWidth < 992 ? true : false; 
    console.log(this.isMobileResolution);
  }

  searchInputChanged(value: string): void {
    if (value.length > 0) {
      this.searchedTopics = this.topics.filter(
        topic => topic.title.toLowerCase().includes(value.toLowerCase())
        // || topic.aliases.map(a => a.toLowerCase()).includes(value.toLowerCase())
      );

      if (this.searchedTopics.length > 0) {
        this.globalSearchTrigger.openMenu();
      } else {
        this.globalSearchTrigger.closeMenu();
      }
    } else {
      this.searchedTopics = [];
      this.globalSearchTrigger.closeMenu();
    }
  }

  gotoTopicDetailsPage(topic: TopicItem): void {
    this.searchInputValue = '';
    this.router.navigate(['topics', 'topicdetails'], {
      state: { topic },
      queryParams: { code: topic.code },
    });
  }

  onMenuClick(navTab: NavTab): void {
    this.selectedMenuItem = navTab;
    if(!this.isMobileResolution) {
      this.router.navigate([navTab.navUrl]);
      return;
    }
    if(this.openedMenuItem && this.openedMenuItem.uniqueId === navTab.uniqueId) {
      this.openedMenuItem = null;
    } else {
      this.openedMenuItem = navTab;
      if(!this.openedMenuItem.children) {
        this.closeMenu();
      }
      this.router.navigate([this.openedMenuItem.navUrl]);
    }
    
  }
  
  onChildMenuClick(menuItem: NavTab): void {
    if(!this.isMobileResolution) {
      this.router.navigate([menuItem.navUrl]);
      return;
    }
    this.closeMenu();
    if(menuItem.navUrl) {
      this.router.navigate([menuItem.navUrl]);
    }
  }
  
  onSkillStudioClick() {
    this.selectedMenuItem = this.headerMenu[0];
    this.router.navigate(['/']);
    if(this.isMobileResolution) {
      this.closeMenu();
    }
  }
  
  closeMenu() {
    let inputElement: HTMLElement = this.collapseBtn.nativeElement as HTMLElement;
    inputElement.click();
    this.cdr.detectChanges();
  }
}
