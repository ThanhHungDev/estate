import React from 'react'
import { useChecklist } from 'react-checklist'


export default ({changeCheckedItem , reports}) => {
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