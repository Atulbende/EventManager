import React, { useEffect } from 'react'
import "datatables.net-dt"
import $ from "jquery";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { useSelector } from 'react-redux';
export default function EventLists() {
  const GetEvents=useSelector((state)=>state);
  useEffect(()=>{
    const HeadTitle= [
      { title : 'Pid',data:'Pid'},
      { title : 'Customer Name',data:'EventType' },
      { title : 'Start Date',data:'StartDate' },
      { title : 'EndDate',data:'EndDate' },
      { title : 'Description',data:'Description' },
      { title : 'EventHandleBy',data:'EventHandleBy' },
      { title : 'EventOrganisation',data:'EventOrganisation' },
      { title : 'TotalEvents',data:'TotalEvents' },
      ];
    var table = $('#sampleTable').DataTable({ 'data': GetEvents, 'columns': HeadTitle, destroy: true });
  },[GetEvents])
  return (<div className='container mt-3 shadow'>
          <div className='tile-body table-responsive'>
                  <table className='table dataTable table-striped w-100 bg-red' id='sampleTable'>
                  </table>
            </div>
  </div>
  
  )
}
