﻿var sysConfig = {
  baseUrl: 'https://wap2.hispace.hicloud.com',
  domainUrl: 'https://appgallery5.huawei.com/',
  queryTimeout: 80000,
  serviceType: 20,
  pageSize: 15,
  externalLink: {
    userContract: 'https://privacy.consumer.huawei.com/legal/hiapp/terms.htm',
    privacyPolicy: 'https://privacy.consumer.huawei.com/legal/hiapp/privacy-statement.htm',
    aboutCookie: 'https://consumer.huawei.com/cn/legal/cookie-policy/',
    beian: ''
  },
  showRecommendAlgorithm: false,
  appIdOfAppGallery: "C27162",
  maxResults: 25,
  isOversea: true,
  validDomains:["https://appgallery1.huawei.com", "https://appgallery7.huawei.com", "https://appgallery8.huawei.com"],
  basePicture: 'this.style.background="#f2f2f2"',
  site: 'sg',
  mwIndexUrl: 'https://wap2.hispace.hicloud.com/uowap/index.html',
  mwAppDetailsUrl: '/app/',
  HWClientDownloadUrl: 'https://appgallery.cloud.huawei.com/appdl/C27162',
  version: '10.4.1.300',
  contextPath: '',
  siteId: 'singapore',
  webEdge: {
    switch: 'ON',
    "baseUrl_north.china": 'https://web-drcn.hispace.dbankcloud.com/edge',
    "baseUrl_singapore": '/edge',
    "baseUrl_europe": 'https://web-dre.hispace.dbankcloud.com/edge',
    "baseUrl_russia": 'https://web-drru.hispace.dbankcloud.com/edge'
  },
  hotsearchKeyCount:10,
  resource: {
    fastAppScriptUrl: ''
  },
    hasdk: {
      reportUrl: 'https://metrics-dra.dt.hicloud.com:6447/webv1',
      idSite: 'AppGalleryDistWapFrontService',
      isImgMethod: '1',
      appDetailPageEventLabel: 'appdetailpage',
    },
  showInstallDialogDelayMs: 3000,
  learningDataProcessingUrl: 'https://privacy.consumer.huawei.com/legal/hiapp/privacy-statement.htm?country=CN&branchid=2&language=en_US',
  navIphoneDownUrl: 'https://appgallery.cloud.huawei.com/appdl/C27162?cno=portal',
  navWindowsDownUrl: 'https://appgallery.cloud.huawei.com/appdl/C499170478846388928?cno=portal',
  checkDeeplinkTimeout: 2500,
  changeNormalBtnSeat: true,
  branchId: '1',
  branchIds: '2',
  uaBrandMatchingRule:[{brandName:"honor",regExp:"\\bhonor|YOK-AN10|YOK-N49|KJR-W09|ALA-AN70|PMT-AN70|AGM3-AL09HN|AGM3-W09HN|HN55LOKS|HN65LOKS|KOB2-AL00HN|KOB2-W09HN|HJC-AN90|KAN-B39|Kanon-B39S|Kanon-B39P|Kanon-B39A|Kanon-B39H|NZA-AL00|KOZ-AL00|KOZ-AL40|NTH-AN00|NTH-NX9|RNA-AN00|RNA-TN00|JLH-AN00|AGM-W09HN|AGM-AL09HN|CHL-AN00|NTN-AN20|ELZ-AN00|ELZ-AN10|ELZ-AN20|CHL-AL00|BRT-W09|HJC-LX9|KRJ2-W09|KRJ2-AN00|HN43DNTA|HN55DNTA|HN65DNTA|BRT-AN09|NEW-AN90|TFY-AN00|KKG-AN70|CAH-AN00|IKD-LX9|HNC-AN00|HNC-AN10|HNC-AN20|BNF-AN00|ALG-AN00|ALG-TN00|BXX-AN09|TFY-AN40|CMA-AN00|CMA-AN40|LOK-350XS|LOK-360XS|LDR-AN00|TAL-AN00|TAL-TN00|ANY-AN00|LGE-AN00|LGE-AN10|LGE-AN20|LGE-AN60|LGE-AN61|MUS-B19S|MUS-B19P|MUS-B19D|GIA-AN00|YAL-AL10\\b"},{brandName:"huawei",regExp:"\\bHuawei|NOH-AN01|TAS-AL00|EVR-AL00|JKM-AL00b|VCE-AL00|CLT-AL00|CLT-AL01|HWI-AL00|LIO-AN00|ELE-AL00|HMA-AL00|CLT-AL00| VOG-AL00|SEA-AL10|JKM-AL00a|LYA-AL10|LON-AL00|LIO-AL00|ALP-TL00|STK-AL00|PIC-AL00|ALP-AL00|INE-AL00|BLA-TL00|ANE-AL00\\b"},{brandName:"meizu",regExp:"\\bMZ\\b"}],
  appmarket:"com.huawei.appmarket",
  appdiscovery:"com.huawei.appdiscovery",
  applinkcfg:{appmarket:{cfg:{"agcgw":{"backurl":"connect-drcn.hispace.hicloud.com","url":"connect-drcn.dbankcloud.cn","websocketbackurl":"connect-ws-drcn.hispace.dbankcloud.com","websocketurl":"connect-ws-drcn.hispace.dbankcloud.cn"},"agcgw_all":{"CN":"connect-drcn.dbankcloud.cn","CN_back":"connect-drcn.hispace.hicloud.com","DE":"connect-dre.dbankcloud.cn","DE_back":"connect-dre.hispace.hicloud.com","RU":"connect-drru.dbankcloud.cn","RU_back":"connect-drru.hispace.hicloud.com","SG":"connect-dra.dbankcloud.cn","SG_back":"connect-dra.hispace.hicloud.com"},"client":{"cp_id":"260086000000068459","product_id":"9105163812218582324","client_id":"190382689382040640","client_secret":"","project_id":"9105163812218582324","app_id":"1027162","package_name":"com.huawei.appmarket"},"oauth_client":{"client_id":"1027162","client_type":1},"app_info":{"app_id":"1027162","package_name":"com.huawei.appmarket"},"service":{"analytics":{"collector_url":"datacollector-drcn.dt.hicloud.com,datacollector-drcn.dt.dbankcloud.cn","collector_url_ru":"datacollector-drru.dt.hicloud.com,datacollector-drru.dt.dbankcloud.cn","collector_url_sg":"datacollector-dra.dt.hicloud.com,datacollector-dra.dt.dbankcloud.cn","collector_url_de":"datacollector-dre.dt.hicloud.com,datacollector-dre.dt.dbankcloud.cn","collector_url_cn":"datacollector-drcn.dt.hicloud.com,datacollector-drcn.dt.dbankcloud.cn","resource_id":"p1","channel_id":""},"search":{"url":"https://search-drcn.cloud.huawei.com"},"cloudstorage":{"storage_url":"https://agc-storage-drcn.platform.dbankcloud.cn"},"ml":{"mlservice_url":"ml-api-drcn.ai.dbankcloud.com,ml-api-drcn.ai.dbankcloud.cn"}},"region":"CN","configuration_version":"3.0","appInfos":[{"package_name":"com.huawei.appmarket","client":{"app_id":"1027162"},"app_info":{"package_name":"com.huawei.appmarket","app_id":"1027162"},"oauth_client":{"client_type":1,"client_id":"1027162"}}]},prefixUrl:'https://appmarket03.dra.agconnect.link'},appmarket_discover:{cfg:{"agcgw":{"backurl":"connect-drcn.hispace.hicloud.com","url":"connect-drcn.dbankcloud.cn","websocketbackurl":"connect-ws-drcn.hispace.dbankcloud.com","websocketurl":"connect-ws-drcn.hispace.dbankcloud.cn"},"agcgw_all":{"CN":"connect-drcn.dbankcloud.cn","CN_back":"connect-drcn.hispace.hicloud.com","DE":"connect-dre.dbankcloud.cn","DE_back":"connect-dre.hispace.hicloud.com","RU":"connect-drru.dbankcloud.cn","RU_back":"connect-drru.hispace.hicloud.com","SG":"connect-dra.dbankcloud.cn","SG_back":"connect-dra.hispace.hicloud.com"},"client":{"cp_id":"260086000000068459","product_id":"9105163812218582324","client_id":"190382689382040640","client_secret":"","project_id":"9105163812218582324","app_id":"1027162","package_name":"com.huawei.appmarket"},"oauth_client":{"client_id":"1027162","client_type":1},"app_info":{"app_id":"1027162","package_name":"com.huawei.appmarket"},"service":{"analytics":{"collector_url":"datacollector-drcn.dt.hicloud.com,datacollector-drcn.dt.dbankcloud.cn","collector_url_ru":"datacollector-drru.dt.hicloud.com,datacollector-drru.dt.dbankcloud.cn","collector_url_sg":"datacollector-dra.dt.hicloud.com,datacollector-dra.dt.dbankcloud.cn","collector_url_de":"datacollector-dre.dt.hicloud.com,datacollector-dre.dt.dbankcloud.cn","collector_url_cn":"datacollector-drcn.dt.hicloud.com,datacollector-drcn.dt.dbankcloud.cn","resource_id":"p1","channel_id":""},"search":{"url":"https://search-drcn.cloud.huawei.com"},"cloudstorage":{"storage_url":"https://agc-storage-drcn.platform.dbankcloud.cn"},"ml":{"mlservice_url":"ml-api-drcn.ai.dbankcloud.com,ml-api-drcn.ai.dbankcloud.cn"}},"region":"CN","configuration_version":"3.0","appInfos":[{"package_name":"com.huawei.appmarket","client":{"app_id":"1027162"},"app_info":{"package_name":"com.huawei.appmarket","app_id":"1027162"},"oauth_client":{"client_type":1,"client_id":"1027162"}}]},prefixUrl:'https://appmarket03.dra.agconnect.link'}},
  getAppLinkingToken:true,
  installVersionSwitch:true,
  pkgNameWhiteList:[{packageName:'com.huawei.apptouch.zgallery',appName:'ZGallery'},{packageName:'com.huawei.apptouch.etstore',appName:'Ethiotel App Store'},{packageName:'com.xrom.intl.appcenter',appName:'M Store'},{packageName:'com.huawei.apptouch.appcell',appName:'AppCell'},{packageName:'com.huawei.apptouch.waktiplay',appName:'AppTouch'},{packageName:'com.huawei.gamebox.global',appName:'KGallery'},{packageName:'com.huawei.apptouch.kgallery',appName:'KGallery'},{packageName:'com.huawei.apptouch.laosetl',appName:'LaosETL'},{packageName:'com.huawei.apptouch.aruplus',appName:'AppTouch'}],
  showPermissions:false,
  isShowHWbtn:'0',
  channelPackageNameMapping:[{keyWord:'Firefox',packageName:'org.mozilla.firefox'},{keyWord:'UWS',packageName:'com.UCMobile'},{keyWord:'MQQBrowser',packageName:'com.tencent.mtt'},{keyWord:'HuaweiBrowser',packageName:'com.huawei.browser'},{keyWord:'VivoBrowser',packageName:'com.vivo.browser'},{keyWord:'HeyTapBrowser',packageName:'com.heytap.browser'},{keyWord:'Aphone Browser',packageName:'com.qihoo.browser'},{keyWord:'SougouMSE',packageName:'sogou.mobile.explorer'},{keyWord:'NewsArticle',packageName:'com.cat.readall'},{keyWord:'Quark',packageName:'com.quark.browser'},{keyWord:'UCBrowser',packageName:'com.UCMobile'},{keyWord:'YaBrowser',packageName:'com.yandex.browser'},{keyWord:'DuckDuckGo',packageName:'com.duckduckgo.mobile.android'},{keyWord:'SamsungBrowser',packageName:'com.sec.android.app.sbrowser'},{keyWord:'PHX',packageName:'com.transsion.phoenix'},{keyWord:'EdgA',packageName:'com.microsoft.emmx'},{keyWord:'baiduboxapp',packageName:'com.baidu.browser.apps'},{keyWord:'minibrowser',packageName:'com.jx.minibrowser'},{keyWord:'haowangzhi;privatebrowser',packageName:'com.jx.privatebrowser'},{keyWord:'haowangzhi;ebrowser',packageName:'com.ledu.ebrowser'},{keyWord:'uabrowser',packageName:'com.sljh.uabrowser'},{keyWord:'hao123',packageName:'com.baidu.hao123'},{keyWord:'packagename',packageName:'com.yczj.mybrowser'},{keyWord:'OPR',packageName:'com.oupeng.mini.android'},{keyWord:'yisou',packageName:'com.browser.yisou'},{keyWord:'XiaoMi/MiuiBrowser',packageName:'com.qingliu.browser.Pi'},{keyWord:'Tomato Browser',packageName:'com.yotu.video'},{keyWord:'CYBrowser',packageName:'com.szcx.browser'},{keyWord:'agentweb',packageName:'com.ly.mengjia.browser'},{keyWord:'Mb2345Browser',packageName:'com.browser2345'}],
  detailType_AGDAPI:5,
  excludeUrlParam_AGDAPI:['callType','shareFrom'],
  partnerId:'unKnow',
  debugMode:false,
  appStoreDelayTime:1000,
  qqMatcherRegExp: /QQTheme/i,
  interfaceCodeSwitch: 'on',
  xssProtectSwitch: 'on',
  mapOfBranchId: {'appgallery':{'userContract':{'cn':'1','sg':'1','de':'0'},'privacy':{'cn':'2','sg':'2','de':'1'}},'gamecenter':{'userContract':{'cn':'1','sg':'1','de':'0'},'privacy':{'cn':'1','sg':'2','de':'1'}}},
  backendSupportLocales: 'PT_CV,TA_MY,UK_UA,LV_LV,ES_VE,ZH_SG,ZH_HANS_SG,ZH_TW,ES_UY,EN_DE,EN_DG,AM,EN_DK,EN_DM,TA_LK,AR,EN_CM,AS,AZ,DA_GL,EN_CX,ES_US,EN_CY,RU_KZ,HR_HR,BE,BG,EN_CA,NB_NO,EN_CC,EN_CH,AR_IL,AR_IQ,BN,BO,EN_CK,EN_BM,BS,DA_DK,BS_LATN_BA,EN_BS,KA_GE,EN_BW,CA,EN_BZ,ES_SV,EN_BB,JV_LATN_ID,EN_BE,SR_XK,CA_AD,CN,EN_BI,CS,EL_GR,RU_KG,EN_AT,EN_AS,EN_AU,DA,DE,TA_IN,EN_AG,EN_AI,IT_IT,FR_BF,FR_BE,SR_RS,FR_BJ,FR_BI,FR_BL,MN_MN,SV_FI,SW_CD,EL,NB_SJ,EN,MAI_DEVA,ES,AR_BH,ET,EU,FR_CA,FR_CD,FR_CG,FR_CF,FR_CI,FR_CH,FA,SI_LK,FR_CM,ES_PR,AR_ER,FI,NE_IN,PT_AO,ES_PY,AR_EG,AR_EH,FR,ES_PA,FA_IR,ES_PE,JV_ID,FR_DJ,ES_PH,AR_ARAB,AR_DZ,TH_TH,PT_BR,GL,FR_DZ,NL_SX,KK_KZ,AR_DJ,GU,ZH_HANT_MO,NL_SR,HE,EL_CY,HI,PA_GURU,HR,HU,MAI_DEVA_IN,ZH_HANT_HK,TR_CY,SV_SE,RU_RU,ID,SR_LATN_ME,FR_FR,ES_NI,KM_KH,NE_NP,BS_BA,IN,SK_SK,IT,FR_GA,IW,ES_MX,PT_MO,FR_GF,MAI,JA,HI_IN,FR_GN,FR_GQ,FR_GP,ZH_MO,PT_MZ,AR_AE,SL_SI,JV,ZH_HANS_MO,KA,FR_HT,KK,HU_HU,KM,EN_ZW,KN,KO,EU_ES,CS_CZ,TE_IN,MY_MM,EN_ZM,OR_IN,JA_JP,LO,PT_GW,LT,LV,EN_ZA,BO_IN,FIL_PH,MI,MR_IN,MK,ML,MN,SR_LATN_RS,MR,MS,MY,SW_KE,NB,FR_KM,NE,ES_IC,RU_MD,BG_BG,NL,IT_SM,ET_EE,EN_WS,ES_HN,KN_IN,EN_XA,FA_AF,DE_LU,TA_SG,TL_PH,FR_LU,MS_BN,OR,EN_VU,LO_LA,FR_MA,ES_GQ,FR_MC,FR_MG,ES_GT,FR_MF,ZH_HANS_HK,PA,EN_VC,FR_ML,FR_MQ,EN_VG,UG_CN,EN_VI,IW_IL,FR_MR,FR_MU,PL,AR_XB,PT,ZH_HANS_CN,EN_US,GU_IN,UR_PK,FR_NC,NL_BE,FR_NE,BE_BY,EN_UG,AM_ET,PT_TL,NL_BQ,EN_UM,EN_TO,DE_LI,EN_TT,EN_TV,ES_ES,EN_TZ,EN_TC,NL_AW,ES_EC,EN_TK,RO,BN_IN,ES_EA,AZ_AZ,FI_FI,RU,GL_ES,EN_SS,FR_PF,EN_SX,EN_SZ,ES_DO,ES_CU,PA_GURU_IN,FR_PM,ES_CR,EN_SB,SI,EN_SD,EN_SC,SK,SL,EN_SE,BO_CN,EN_SH,EN_SG,IN_ID,EN_SI,EN_SL,SR,AR_YE,SV,KO_KR,SW,ES_CL,EN_RW,TA,ES_CO,RO_MD,TE,TH,TL,TR,MS_MY,AR_TD,FR_RE,ES_BO,AR_SY,AZ_LATN_AZ,AR_SO,ES_AR,PT_PT,UG,AR_SS,UK,MY_QAAG,FR_RW,ID_ID,UR,EN_PK,FR_SC,ZH_HK,RU_UA,AR_SD,UZ,EN_PN,AR_SA,SR_BA,UZ_UZ,EN_PR,EN_PW,FR_SN,VI,PA_IN,FR_SY,EN_PG,EN_PH,FR_TD,MY_ZG,FR_TG,FR_TN,UR_IN,BN_BD,EN_NZ,EN_NL,EN_NR,EN_NU,EN_MW,AR_TN,PT_ST,EN_MY,SR_LATN_XK,SW_UG,EN_NA,NL_CW,SW_TZ,EN_NG,EN_NF,EN_MH,EN_MG,EN_MP,EN_MO,EN_MT,EN_MS,EN_MU,MI_NZ,FR_VU,AR_OM,TR_TR,VI_VN,DE_BE,DE_DE,FR_WF,SV_AX,EN_LS,EN_LR,ZH,EN_KY,DE_CH,EN_LC,EN_KE,EN_KI,EN_KN,SW_AR,EN_JE,CA_IT,AR_QA,EN_JM,AR_PS,UZ_LATN,JV_LATN,DE_AT,FR_YT,MAI_IN,RU_BY,SR_LATN,AR_KW,CA_FR,EN_IE,BS_LATN,EN_IL,HR_BA,AR_KM,EN_IN,EN_IM,ZH_HANT_TW,EN_IO,UZ_LATN_UZ,AZ_LATN,PL_PL,ML_IN,EN_HK,AR_JO,NL_NL,HE_IL,EN_GU,EN_GY,SR_LATN_BA,MK_MK,SR_ME,EN_GB,EN_GD,ZH_HANS,EN_GH,EN_GG,LT_LT,AR_MR,EN_GI,EN_GM,IT_CH,RO_RO,AR_MA,ZH_HANT,CA_ES,AR_LY,FIL,EN_FI,AS_IN,MS_SG,EN_FK,EN_FJ,EN_FM,EN_ER,AR_LB',
  useNewApiGetNewHotSearchList: true,
  useNewApiCompleteSearchWord: true
};
