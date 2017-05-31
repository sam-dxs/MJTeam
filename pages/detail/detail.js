// pages/detail1/detail1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    member0: {
      Index: 0,
      url: '/images/sam.jpg',
      name: 'Sam',
      post: '技术总监',
      describe: '老大，技术，沉稳',
      array: [
        {
          label: '电话：',
          detail: '13906504493'
        }, {
          label: 'Email：',
          detail: 'dengxishan@rucapital.com'
        }, {
          label: 'QQ：',
          detail: '3414819408'
        }, {
          label: '所属部门：',
          detail: 'IT研发部'
        }
      ]
    },
    member1: {
      Index: 1,
      url: '/images/lee.jpg',
      name: 'Lee',
      post: '.net开发工程师',
      describe: '技术，宅，爱工作',
      array: [
        {
          label: '电话：',
          detail: '18910336683'
        }, {
          label: 'Email：',
          detail: 'lizhong@rucapital.com'
        }, {
          label: 'QQ：',
          detail: '2881009975'
        }, {
          label: '所属部门：',
          detail: 'IT研发部'
        }
      ]
    },
    member2: {
      Index: 2,
      url: '/images/barry.jpg',
      name: 'Barry',
      post: '.net开发工程师',
      describe: '技术，宅，爱工作',
      array: [
        {
          label: '电话：',
          detail: '18779882316'
        }, {
          label: 'Email：',
          detail: 'liyifeng@rucapital.com'
        }, {
          label: 'QQ：',
          detail: '2881009977'
        }, {
          label: '所属部门：',
          detail: 'IT研发部'
        }
      ]
    },
    member3: {
      Index: 3,
      url: '/images/sophia.jpg',
      name: 'Sophia',
      post: '.net开发工程师',
      describe: '技术，宅，爱工作',
      array: [
        {
          label: '电话：',
          detail: '15058124416'
        }, {
          label: 'Email：',
          detail: 'xuyuping@rucapital.com'
        }, {
          label: 'QQ：',
          detail: '2881009976'
        }, {
          label: '所属部门：',
          detail: 'IT研发部'
        }
      ]
    },
    member4: {
      Index: 4,
      url: '/images/default.jpg',
      name: 'Willy',
      post: '.net开发工程师',
      describe: '技术，宅，爱工作',
      array: [
        {
          label: '电话：',
          detail: '13073651543'
        }, {
          label: 'Email：',
          detail: 'wangyaozu@rucapital.com'
        }, {
          label: 'QQ：',
          detail: '2881009978'
        }, {
          label: '所属部门：',
          detail: 'IT研发部'
        }
      ]
    },
    member5: {
      Index: 5,
      url: '/images/default.jpg',
      name: 'Monique',
      post: '.net开发工程师',
      describe: '技术，宅，爱工作',
      array: [
        {
          label: '电话：',
          detail: '17816858960'
        }, {
          label: 'Email：',
          detail: 'molimei@rucapital.com'
        }, {
          label: 'QQ：',
          detail: '2881009979'
        }, {
          label: '所属部门：',
          detail: 'IT研发部'
        }
      ]
    },
    member6: {
      Index: 6,
      url: '/images/default.jpg',
      name: 'Eric',
      post: '.net开发实习生',
      describe: '技术，宅，爱工作',
      array: [
        {
          label: '电话：',
          detail: '13035148612'
        }, {
          label: 'Email：',
          detail: 'yefeng@rucapital.com'
        }, {
          label: 'QQ：',
          detail: '2881009980'
        }, {
          label: '所属部门：',
          detail: 'IT研发部'
        }
      ]
    },
    member7: {
      Index: 7,
      url: '/images/default.jpg',
      name: 'Jason',
      post: '.net开发实习生',
      describe: '技术，宅，爱工作',
      array: [
        {
          label: '电话：',
          detail: '15871375825'
        }, {
          label: 'Email：',
          detail: 'shenkai@rucapital.com'
        }, {
          label: 'QQ：',
          detail: '2881009981'
        }, {
          label: '所属部门：',
          detail: 'IT研发部'
        }
      ]
    },
    member8: {
      Index: 8,
      url: '/images/default.jpg',
      name: 'Devin',
      post: 'Web测试工程师',
      describe: '技术，宅，爱工作',
      array: [
        {
          label: '电话：',
          detail: '18268930659'
        }, {
          label: 'Email：',
          detail: 'wangjingxu@rucapital.com'
        }, {
          label: 'QQ：',
          detail: '2881009982'
        }, {
          label: '所属部门：',
          detail: 'IT研发部'
        }
      ]
    },
    member9: {
      Index: 9,
      url: '/images/default.jpg',
      name: 'Ian',
      post: 'Web测试工程师',
      describe: '技术，宅，爱工作',
      array: [
        {
          label: '电话：',
          detail: '13906504493'
        }, {
          label: 'Email：',
          detail: 'wangliangjun@rucapital.com'
        }, {
          label: 'QQ：',
          detail: '2881009983'
        }, {
          label: '所属部门：',
          detail: 'IT研发部'
        }
      ]
    },
    member10: {
      Index: 10,
      url: '/images/default.jpg',
      name: 'Roy',
      post: '前端开发工程师',
      describe: '技术，宅，爱工作',
      array: [
        {
          label: '电话：',
          detail: '18989459461'
        }, {
          label: 'Email：',
          detail: 'yanluohao@rucapital.com'
        }, {
          label: 'QQ：',
          detail: '2881009984'
        }, {
          label: '所属部门：',
          detail: 'IT研发部'
        }
      ]
    },
    member11: {
      Index: 11,
      url: '/images/default.jpg',
      name: 'Helen',
      post: '前端开发工程师',
      describe: '技术，宅，爱工作',
      array: [
        {
          label: '电话：',
          detail: '18845292716'
        }, {
          label: 'Email：',
          detail: 'tengfengshuang@rucapital.com'
        }, {
          label: 'QQ：',
          detail: '2881009985'
        }, {
          label: '所属部门：',
          detail: 'IT研发部'
        }
      ]
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      index: options.index
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})