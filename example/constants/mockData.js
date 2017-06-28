/**
 * Created by dpcui on 27/06/2017.
 */

const workbenchData = [
  {
    id: '1',
    title: '客户管理',
    todo: 0,
    comp: '',
    icon: 'logo-angular',
    member: [
      {
        title: '客户信息管理',
        icon: 'logo-facebook',
        actionType: '',
        codeNo: 'EntDetailNav',
        dono: 'EntCustomerDetail',
        requestParam: {
          CustomerType: '01',
          _hasCodeMap: false,
          _pnu: 1,
          _psz: 15,
          dono: 'EntCustomerList',
          owArgs: 'cs11'
        }
      },
      {
        title: '自然人客户',
        icon: 'logo-foursquare',
        actionType: '',
        codeNo: 'IndDetailNav',
        dono: 'IndCustomerEditInfo',
        requestParam: {
          _hasCodeMap: false,
          _pnu: 1,
          _psz: 15,
          dono: 'IndCustomerList',
          owArgs: 'cs11'
        }
      },
      {
        title: '法人客户',
        icon: 'logo-freebsd-devil',
        actionType: '',
        codeNo: 'EntDetailNav',
        dono: 'EntCustomerDetail',
        requestParam: {
          CustomerType: '01',
          _hasCodeMap: false,
          _pnu: 1,
          _psz: 15,
          dono: 'EntCustomerList',
          owArgs: 'cs11'
        }
      },
      {
        title: '集团客户',
        icon: 'logo-hackernews',
        actionType: '',
        codeNo: 'GroupDetailNav',
        dono: 'GroupCustomerDetail',
        requestParam: {
          CustomerType: '04',
          _hasCodeMap: false,
          _pnu: 1,
          _psz: 15,
          dono: 'GroupCustomerList',
          owArgs: 'cs11'
        }
      },
      {
        title: '第三方客户',
        icon: 'logo-github',
        actionType: '',
        codeNo: 'ThirdPartDetailNav',
        dono: 'ThirdPartCustomerDetail',
        requestParam: {
          _hasCodeMap: false,
          _pnu: 1,
          _psz: 15,
          dono: 'ThirdPartCustomerList',
          owArgs: 'cs11'
        }
      },
      {
        title: '客户关系管理',
        icon: 'logo-googleplus',
        actionType: '',
        codeNo: 'EntDetailNav',
        dono: 'EntCustomerDetail',
        requestParam: {
          CustomerType: '01',
          _hasCodeMap: false,
          _pnu: 1,
          _psz: 15,
          dono: 'EntCustomerList',
          owArgs: 'cs11'
        }
      }
    ]
  },
  {
    id: '1',
    title: '授信管理',
    todo: 0,
    comp: '',
    icon: 'logo-apple',
    member: [
      {
        title: '客户授信申请',
        icon: 'logo-github',
      },
      {
        title: '项目授信',
        icon: 'logo-google',
      },
      {
        title: '集团授信',
        icon: 'logo-googleplus',
      },
      {
        title: '供应商授信',
        icon: 'logo-github',
      },
      {
        title: '额度管理',
        icon: 'logo-google',
      },
      {
        title: '客户台帐管理',
        icon: 'logo-googleplus',
      },
      {
        title: '项目交接',
        icon: 'logo-github',
      }
    ]
  },
  {
    id: '1',
    title: '业务创新',
    todo: 0,
    comp: '',
    icon: 'logo-bitcoin',
    member: [
      {
        title: '创新项目管理',
        icon: 'logo-hackernews',
      },
      {
        title: '创新项目授信申请',
        icon: 'logo-html5',
      },
      {
        title: '方案管理',
        icon: 'logo-javascript',
      },
      {
        title: '台帐统计',
        icon: 'logo-linkedin',
      },
    ]
  },
  {
    id: '1',
    title: '合同管理',
    todo: 0,
    comp: '',
    icon: 'logo-buffer',
    member: [
      {
        title: '登记',
        icon: 'logo-javascript',
      },
      {
        title: '合同审批',
        icon: 'logo-linkedin',
      },
      {
        title: '合同台帐',
        icon: 'logo-nodejs',
      }
    ]
  },
  {
    id: '1',
    title: '商务运作',
    todo: 0,
    comp: '',
    icon: 'logo-chrome',
    member: [
      {
        title: '前期款管理',
        icon: 'logo-nodejs',
      },
      {
        title: '起租确认',
        icon: 'logo-hackernews',
      },
      {
        title: '商务异常',
        icon: 'logo-html5',
      },
      {
        title: '物流管理',
        icon: 'logo-javascript',
      },
      {
        title: '保险管理',
        icon: 'logo-reddit',
      }
    ]
  },
  {
    id: '1',
    title: '资产管理',
    todo: 0,
    comp: '',
    icon: 'logo-codepen',
    member: [
      {
        title: '起租管理',
        icon: 'logo-playstation',
      },
      {
        title: '租金管理',
        icon: 'logo-python',
      },
      {
        title: '资产管理',
        icon: 'logo-reddit',
      }
    ]
  },
  {
    id: '1',
    title: '财务管理',
    todo: 0,
    comp: '',
    icon: 'logo-css3',
    member: [
      {
        title: '息差计提服务费分摊',
        icon: 'logo-rss',
      },
      {
        title: '凭证管理',
        icon: 'logo-sass',
      },
      {
        title: '票据管理',
        icon: 'logo-skype',
      }
    ]
  },
  {
    id: '1',
    title: '法务',
    todo: 0,
    comp: '',
    icon: 'logo-designernews',
    member: [
      {
        title: '客户信息管理',
        icon: 'logo-snapchat',
      },
      {
        title: '自然人客户',
        icon: 'logo-steam',
      },
      {
        title: '法人客户',
        icon: 'logo-tumblr',
      }
    ]
  },
  {
    id: '1',
    title: '报表统计',
    todo: 0,
    comp: '',
    icon: 'logo-dribbble',
    member: [
      {
        title: '客户信息管理',
        icon: 'logo-tux',
      },
      {
        title: '自然人客户',
        icon: 'logo-twitch',
      },
      {
        title: '法人客户',
        icon: 'logo-twitter',
      }
    ]
  },
  {
    id: '1',
    title: '文档管理',
    todo: 0,
    comp: '',
    icon: 'logo-dropbox',
    member: [
      {
        title: '客户信息管理',
        icon: 'logo-usd',
      },
      {
        title: '自然人客户',
        icon: 'logo-vimeo',
      },
      {
        title: '法人客户',
        icon: 'logo-whatsapp',
      }
    ]
  },
  {
    id: '1',
    title: '业务配置',
    todo: 0,
    comp: '',
    icon: 'logo-euro',
    member: [
      {
        title: '客户信息管理',
        icon: 'logo-windows',
      },
      {
        title: '自然人客户',
        icon: 'logo-wordpress',
      },
      {
        title: '法人客户',
        icon: 'logo-xbox',
      }
    ]
  },
];

const loanMockData = [
  {
    id: '0010',
    name: '租赁条件',
    groupItem: [
      {
        id: 'Summary',
        name: '名称',
        suffix: '',
        checkFormat: 'Text',
        editType: 'TextField',
        readonly: false,
        required: true,
        value: '500万-24个月-明示利率-等额',
        showValue: '500万-24个月-明示利率-等额',
        menuMap: []
      },
      {
        id: 'BusinessSum',
        name: '项目总额',
        suffix: '元',
        checkFormat: 'Currency',
        editType: 'TextField',
        readonly: false,
        required: true,
        value: 5000000,
        showValue: '5,000,000.00',
        menuMap: []
      },
      {
        id: 'Residual',
        name: '资产余值',
        suffix: '元',
        checkFormat: 'Currency',
        editType: 'TextField',
        readonly: false,
        required: false,
        value: 0,
        showValue: 0.00,
        menuMap: []
      },
      {
        id: 'StartDate',
        name: '起租日期',
        suffix: '',
        checkFormat: 'Date',
        editType: 'Date',
        readonly: false,
        required: true,
        value: '2014/07/20',
        showValue: '2014/07/20',
        menuMap: []
      },
      {
        id: 'TermMonth',
        name: '期限',
        suffix: '月',
        checkFormat: 'Integer',
        editType: 'TextField',
        readonly: false,
        required: false,
        value: 24,
        showValue: 24,
        menuMap: []
      },
      {
        id: 'Terms',
        name: '总还租次数',
        suffix: '',
        checkFormat: 'Integer',
        editType: 'TextField',
        readonly: false,
        required: true,
        value: 24,
        showValue: 24,
        menuMap: []
      },
      {
        id: 'PaymentPeriod',
        name: '年还租次数',
        suffix: '',
        checkFormat: 'Integer',
        editType: 'Select',
        readonly: false,
        required: false,
        value: 'M',
        showValue: 12,
        menuMap: [
          {
            value: '12',
            prop: 1
          },
          {
            value: '6',
            prop: 2
          },
          {
            value: '4',
            prop: 3
          },
          {
            value: '3',
            prop: 4
          },
          {
            value: '2',
            prop: 5
          },
          {
            value: '1',
            prop: 6
          }
        ]
      },
      {
        id: 'RateAppearMode',
        name: '利息表现形式',
        suffix: '',
        checkFormat: 'Text',
        editType: 'RadioBox',
        readonly: false,
        required: true,
        value: 'Indication',
        showValue: '明示利率',
        menuMap: [
          {
            value: '明示利率',
            prop: 1,
          },
          {
            value: '隐含利率',
            prop: 2,
          }
        ]
      },
      {
        id: 'TermCalcMethod',
        name: '租金计期方式',
        suffix: '',
        checkFormat: 'Text',
        editType: 'RadioBox',
        readonly: false,
        required: true,
        value: 'TermEqual',
        showValue: '等期',
        menuMap: [
          {
            value: '等期',
            prop: 1,
          },
          {
            value: '不等期',
            props: 2,
          }
        ]
      },
      {
        id: 'PaymentCalcMethod',
        name: '租金计算方式',
        suffix: '',
        checkFormat: 'Text',
        editType: 'Select',
        readonly: false,
        required: true,
        value: 'EvenTotalEqual',
        showValue: '等额租金',
        menuMap: [
          {
            value: '等额租金',
            prop: 1
          },
          {
            value: '等额本金',
            prop: 2
          },
          {
            value: '不等额本金',
            prop: 3
          },
          {
            value: '不等额租金',
            prop: 4
          }
        ]
      },
      {
        id: 'PaymentPoint',
        name: '租金偿还方式',
        suffix: '',
        checkFormat: 'Text',
        editType: 'RadioBox',
        readonly: false,
        required: true,
        value: 'After',
        showValue: '后付',
        menuMap: [
          {
            value: '后付',
            prop: 1
          },
          {
            value: '先付',
            prop: 2
          }
        ]
      },
      {
        id: 'InterestCalcMode',
        name: '计息方式',
        suffix: '',
        checkFormat: 'Text',
        editType: 'RadioBox',
        readonly: false,
        required: true,
        value: 'M',
        showValue: '按月计息',
        menuMap: [
          {
            value: '按月计息',
            prop: 1,
          },
          {
            value: '按日计息',
            prop: 2
          }
        ]
      },
      {
        id: 'BaseRate',
        name: '央行基准利率',
        suffix: '%',
        checkFormat: 'Float2',
        editType: 'TextField',
        readonly: true,
        required: false,
        value: 0.0615,
        showValue: 6.15,
        menuMap: []
      },
      {
        id: 'RateFloatType',
        name: '利率调整方式',
        suffix: '',
        checkFormat: 'Text',
        editType: 'RadioBox',
        readonly: false,
        required: false,
        value: 'Point',
        showValue: '加',
        menuMap: [
          {
            value: '加',
            prop: 1,
          },
          {
            value: '乘',
            prop: 2
          }
        ]
      },
      {
        id: 'RateFloat',
        name: '利率上浮调整基点',
        suffix: '%',
        checkFormat: 'Float2',
        editType: 'TextField',
        readonly: false,
        required: false,
        value: 0.4,
        showValue: 0.40,
        menuMap: []
      },
      {
        id: 'ActualRate',
        name: '年利率',
        suffix: '%',
        checkFormat: 'Float2',
        editType: 'TextField',
        readonly: false,
        required: false,
        value: 0.0655,
        showValue: 6.55,
        menuMap: []
      },
      {
        id: 'FirstPayAmt',
        name: '首付款',
        suffix: '元',
        checkFormat: 'Currency',
        editType: 'TextField',
        readonly: false,
        required: false,
        value: 0,
        showValue: 0.00,
        menuMap: []
      },
      {
        id: 'buttons',
        name: '按钮组',
        suffix: '',
        checkFormat: 'Text',
        editType: 'TextField',
        readonly: false,
        required: false,
        value: '',
        showValue: '',
        menuMap: []
      }
    ]
  },
  {
    id: '0015',
    name: '收付款计划',
    groupItem: [
      {
        id: 'capitalSchedule',
        name: '收付款计划',
        suffix: '',
        checkFormat: 'Text',
        editType: 'TextField',
        readonly: false,
        required: false,
        value: '',
        showValue: '',
        menuMap: []
      }
    ]
  },
  {
    id: '0020',
    name: '租赁详细信息',
    groupItem: [
      {
        id: 'TotalRepaymentAmt1',
        name: '租金总额（含首付款）',
        suffix: '元',
        checkFormat: 'Currency',
        editType: 'TextField',
        readonly: true,
        required: false,
        value: '',
        showValue: 0.00,
        menuMap: []
      },
      {
        id: 'TotalYield',
        name: '总收益',
        suffix: '元',
        checkFormat: 'Currency',
        editType: 'TextField',
        readonly: true,
        required: false,
        value: 998362.48,
        showValue: '998,362.48',
        menuMap: []
      },
      {
        id: 'Xirr',
        name: 'XIRR',
        suffix: '%',
        checkFormat: 'Float2',
        editType: 'TextField',
        readonly: true,
        required: false,
        value: 0.137023,
        showValue: 13.70,
        menuMap: []
      },
      {
        id: 'TotalRepaymentAmt',
        name: '租金总额',
        suffix: '元',
        checkFormat: 'Currency',
        editType: 'TextField',
        readonly: true,
        required: false,
        value: 5348262.48,
        showValue: '5,348,262.48',
        menuMap: []
      },
      {
        id: 'TotalInterestAmt',
        name: '利息总额',
        suffix: '元',
        checkFormat: 'Currency',
        editType: 'TextField',
        readonly: true,
        required: false,
        value: 348262.48,
        showValue: '348,262.48',
        menuMap: []
      },
      {
        id: 'TCR',
        name: 'TCR',
        suffix: '%',
        checkFormat: 'Float2',
        editType: 'TextField',
        readonly: true,
        required: false,
        value: 0.065345,
        showValue: 6.53,
        menuMap: []
      },
      {
        id: 'ReTotal',
        name: '回收本金总额',
        suffix: '元',
        checkFormat: 'Currency',
        editType: 'TextField',
        readonly: true,
        required: false,
        value: '',
        showValue: 0.00,
        menuMap: []
      }
    ]
  },
  {
    id: '0030',
    name: '租金表',
    groupItem: [
      {
        id: 'RentTable',
        name: '租金表',
        suffix: '',
        checkFormat: 'Text',
        editType: 'TextField',
        readonly: false,
        required: false,
        value: '',
        showValue: '',
        menuMap: []
      }
    ]
  }
];

export default {
  workbenchData,
  loanMockData,
};

