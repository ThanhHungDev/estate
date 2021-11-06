import React from 'react'
import { useChecklist } from 'react-checklist'
const reports = [
    { _id: 1, label: 'thích report test', select: false },
    { _id: 2, label: 'thích report test fsdf', select: false },
    { _id: 3, label: 'thích report test à ', select: false },
    { _id: 4, label: 'thích report test affff ', select: false },
    { _id: 5, label: 'thích report t ádaest á', select: false },
    { _id: 6, label: 'thíchád  report test', select: false },
    { _id: 7, label: 'ta hích report test', select: false },
]

export default ({changeCheckedItem}) => {
    const { handleCheck, isCheckedAll, checkedItems } = useChecklist(reports, {
        key: '_id',
        keyType: 'number',
    })

    const handleCheckItem = e => {
        handleCheck( e )
        /// send data to parent
        if( !!changeCheckedItem ){
            changeCheckedItem( checkedItems )
        }
    }
    return <div className="list-group list-group-flush">
        {
            reports.map( report => (
                <label className={`mb-0 list-group-item list-group-item-action cursor-pointer ${ checkedItems.has(report._id) && 'list-group-item-warning' }`} key={report._id}>
                    <input className="d-none" type="checkbox" data-key={report._id} onChange={handleCheckItem} checked={checkedItems.has(report._id)}  />
                    { report.label }
                </label>
            ))
        }
    </div>
}