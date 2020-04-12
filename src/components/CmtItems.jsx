import React from 'react'
import cmtItems from '@/css/CmtItems.scss'
import 'bootstrap/dist/css/bootstrap'

export default class CmtItems extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <div className={cmtItems.items}>
            <h4 className={cmtItems.reviewer}>评论人:{this.props.name}</h4>
            <h2 className={cmtItems.content}>{this.props.content}</h2>
            <button className={[cmtItems.btn, 'btn', 'btn-primary'].join(' ')} key={this.props.id}>删除</button>
        </div>
    }
}