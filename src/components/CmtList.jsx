import React from 'react'
import CmtItems from 'components/CmtItems'
import cmtList from '@/css/CmtList.scss'

export default class CmtList extends React.Component {
    constructor() {
        super()
        this.state = {
            CommentList: [{
                id: 1,
                name: 'wj',
                content: '听闻姑娘治家有方，先生余生愿闻其详'
            }, {
                id: 2,
                name: 'cxx',
                content: '这是我的第二杯半价'
            }, {
                id: 3,
                name: 'lc',
                content: '煎和熬都是变美味的方法，加油也是'
            }]
        }
    }

    render() {
        return <div className={cmtList.cmt}>
            <h1 className={cmtList.title}>这是评论组件</h1>
            {this.state.CommentList.map(item =>
                <CmtItems {...item} key={item.id}></CmtItems>
            )}
        </div>
    }
}