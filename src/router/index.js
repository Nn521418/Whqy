import Vue from 'vue'
import Router from 'vue-router'


const IndexHeader = resolve => require(['../view/Index.vue'], resolve)
const news = resolve => require(['../view/News/SpotNews.vue'], resolve)
const letter = resolve => require(['../view/Duce/RefeRral.vue'], resolve)
//

//景区概况
const OverviewContent = resolve => require(['../view/Overview/OverviewContent'], resolve)
//藏品欣赏
const collectionContent = resolve => require(['../view/Collect/collectionContent'], resolve)
//重大事迹
const Martyrsdeeds = resolve => require(['../view/Marty/Martyrsdeeds'], resolve)
//习老精神
const Mind = resolve => require(['../view/Mind/Mind'], resolve)
//文化教育
const Culture = resolve => require(['../view/Culture/Culture'], resolve)


Vue.use(Router)

export default new Router({
  // linkActiveClass: 'active',
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexHeader,
      children: [//栏目子路由
        {
          path: '',
          component: resolve => {
            require(['../view/Middle'], resolve)
          },
        },
        {
          path: 'news',
          component: news,
          children: [
            {
              path: '',
              component: resolve => {
                require(['@/components/New/News'], resolve)
              },
            },
            {
              path: 'News',
              component: resolve => {
                require(['@/components/New/News'], resolve)
              },
            },
            {
              path: 'InForm',
              component: resolve => {
                require(['@/components/New/InForm'], resolve)
              },
            }
          ]//左侧路由
        },
        {
          path: 'letter',//介绍栏目
          component: letter,
          children: [
            {
              path: '',//默认路由页面
              component: resolve => {
                require(['@/components/Letter/InTro'], resolve)
              }
            },
            {
              path: 'intro',
              component: resolve => {
                require(['@/components/Letter/InTro'], resolve)
              }
            },
            {
              path: 'pass',
              component: resolve => {
                require(['@/components/Letter/Pass'], resolve)
              }
            },
            {
              path: 'pics',
              component: resolve => {
                require(['@/components/Letter/PicTure'], resolve)
              }
            },
            {
              path: 'call',
              component: resolve => {
                require(['@/components/Letter/Recall'], resolve)
              }
            },
            {
              path: 'data',
              component: resolve => {
                require(['@/components/Letter/Data'], resolve)
              }
            },
            {
              path: 'work',
              component: resolve => {
                require(['@/components/Letter/Works'], resolve)
              }
            },
            {
              path: 'video',
              component: resolve => {
                require(['@/components/Letter/Lip'], resolve)
              }
            }
          ]//左侧路由
        },
        {
          //景点概况
          path: 'OverviewContent',
          component: OverviewContent,
          children: [
            {
              path: '',
              component: resolve => {
                require(['../components/OerviewView/OerviewIntroduce'], resolve)
              },
            },
            {
              path: 'OerviewIntroduce',
              component: resolve => {
                require(['../components/OerviewView/OerviewIntroduce'], resolve)
              },
            },
            {
              path: 'institutional',
              component: resolve => {
                require(['../components/OerviewView/institutional'], resolve)
              },
            },
            {
              path: 'shufty',
              component: resolve => {
                require(['../components/OerviewView/shufty'], resolve)
              },
            }
          ]
        },
        {
          //藏品欣赏
          path: 'collectionContent',
          component: collectionContent,
          children: [
            {
              path: '',
              component: resolve => {
                require(['../components/collection/products'], resolve)
              },
            },
            {
              path: 'products',
              component: resolve => {
                require(['../components/collection/products'], resolve)
              },
            },
            {
              path: 'CulturalStory',
              component: resolve => {
                require(['../components/collection/CulturalStory'], resolve)
              },
            },
            {
              path: 'souvenir',
              component: resolve => {
                require(['../components/collection/souvenir'], resolve)
              },
            }
          ]
        },
        {
          //重大事迹
          path: 'Martyrsdeeds',
          component: Martyrsdeeds,
          children: [
            {
              path: '',
              component: resolve => {
                require(['../components/Martyrsdeeds/hreo'], resolve)
              },
            },
            {
              path: 'hreo',
              component: resolve => {
                require(['../components/Martyrsdeeds/hreo'], resolve)
              },
            },
            {
              path: 'bigaffari',
              component: resolve => {
                require(['../components/Martyrsdeeds/bigaffari'], resolve)
              },
            }
          ]
        },
        {
          path: 'Mind',// 习老精神
          component: Mind,
          children: [
            {
              path: '',
              component: resolve => {
                require(['../components/mind/Life'], resolve)
              },
            },
            {
              path: 'life',
              component: resolve => {
                require(['../components/mind/Life'], resolve)
              },
            },
            {
              path: 'feats',
              component: resolve => {
                require(['../components/mind/Feats'], resolve)
              },
            },
            {
              path: 'history',
              component: resolve => {
                require(['../components/mind/history'], resolve)
              },
            },
            {
              path: 'text',
              component: resolve => {
                require(['../components/mind/Text'], resolve)
              },
            },
            {
              path: 'motto',
              component: resolve => {
                require(['../components/mind/Motto'], resolve)
              },
            },
            {
              path: 'words',
              component: resolve => {
                require(['../components/mind/Words'], resolve)
              },
            },
            {
              path: 'recall',
              component: resolve => {
                require(['../components/mind/Recall'], resolve)
              },
            }
          ]
        },
        {//追思缅怀详情
          path: 'calldatails',
          component: resolve => {
            require(['../components/mind/CallDatails'], resolve)
          },
        },
        {//历史瞬间详情
          path: 'historydatails',
          component: resolve => {
            require(['../components/mind/HistoryDatails'], resolve)
          },
        },
        {//文化教育
          path: 'Culture',
          component: Culture,
          children: [
            {
              path: '',
              component: resolve => {
                require(['../components/Culture/Teach'], resolve)
              }
            },
            {
              path: 'teach',
              component: resolve => {
                require(['../components/Culture/Teach'], resolve)
              }
            },
            {
              path: 'red',
              component: resolve => {
                require(['../components/Culture/Red'], resolve)
              }
            },
            {
              path: 'padegogy',
              component: resolve => {
                require(['../components/Culture/Padegogy'], resolve)
              }
            },
            {
              path: 'firstheart',
              component: resolve => {
                require(['../components/Culture/Firstheart'], resolve)
              }
            }
          ]
        },
        {//不忘初心详情页
          path: 'bookdatails',
          component: resolve => {
            require(['../components/Culture/BookDatails'], resolve)
          }
        },
        {//文化遗产详情页
          path: 'gogudatails',
          component: resolve => {
            require(['../components/Culture/Gogudatails'], resolve)
          }
        },
        {//党章党规详情页
          path: 'teachdatails',
          component: resolve => {
            require(['../components/Culture/TeachDatails'], resolve)
          }
        },
        {//红色宣传详情页
          path: 'factory',
          component: resolve => {
            require(['../components/Culture/Factory'], resolve)
          }
        },
        {//渭华讲堂
          path: 'Classroom',
          component: resolve => {
            require(['../view/Classroom/Classroom'], resolve)
          }
        },
        {//渭华讲堂详情
          path: 'ClassDatails',
          component: resolve => {
            require(['../view/Classroom/ClassDatails'], resolve)
          }
        },
        {//知识问答
          path: 'FAQS',
          component: resolve => {
            require(['../view/Faqs/Faqs'], resolve)
          }
        },
        {//知识问答详情
          path: 'answer',
          component: resolve => {
            require(['../view/Faqs/Answer'], resolve)
          }
        },
        {//红色旅游
          path: 'red',
          component: resolve => {
            require(['../view/Red/Redtravel'], resolve)
          },
          children:[
            {//默认页面：经典路线
              path: '',
              component: resolve => {
                require(['../components/Red/Path'], resolve)
              }
            },
            {//经典路线
              path: 'path',
              component: resolve => {
                require(['../components/Red/Path'], resolve)
              }
            },
            {//风土民俗
              path: 'folk',
              component: resolve => {
                require(['../components/Red/Folk'], resolve)
              }
            },
            {//便民查询
              path: 'query',
              component: resolve => {
                require(['../components/Red/Query'], resolve)
              }
            }
          ]
        },
        {//红色旅游详情
          path: 'redatails',
          component:resolve => {
            require(['../view/Red/RedDatails'], resolve)
          }
        },
        {//参观留言
          path: 'message',
          component:resolve => {
            require(['../view/Message/Message'], resolve)
          },
          children:[
            {
              path: '',
              component:resolve => {
                require(['../components/Message/Message'], resolve)
              }
            },
            {//签到
              path: 'sign',
              component:resolve => {
                require(['../components/Message/Message'], resolve)
              }
            },
            {//留言板
              path:'board',
              component:resolve => {
                require(['../components/Message/Board'], resolve)
              }
            },
            {
              path:'answering',
              component:resolve => {
                require(['../components/Message/answering'], resolve)
              }
            }
          ]
        },
        {
          path: 'handbook',
          component:resolve => {
            require(['../view/Handbook/Handbook'], resolve)
          },
          children:[
            {
              path:'',
              component:resolve => {
                require(['../components/Handbook/ticket'], resolve)
              }
            },
            {
              path:'ticket',
              component:resolve => {
                require(['../components/Handbook/ticket'], resolve)
              }
            },
            {
              path:'reg',
              component:resolve => {
                require(['../components/Handbook/regulations'], resolve)
              }
            },
            {
              path:'tions',
              component:resolve => {
                require(['../components/Handbook/Interpretation'], resolve)
              }
            },
          ]
        },
        {
          path: 'platform',
          component:resolve => {
            require(['../view/platform'], resolve)
          }
        }
      ]
    }
  ],
 // 页面跳转时滚动条重新回到顶部
 //  scrollBehavior (to, from, savedPosition) {
 //    if (savedPosition) {
 //      return savedPosition
 //    } else {
 //      return { x: 0, y: 0 }
 //    }
 //  }
})
