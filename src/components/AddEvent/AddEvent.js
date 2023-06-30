import React,{ useState }from 'react'
import { useDispatch } from 'react-redux';
import { Validation } from '../validation';
export default function AddEvent() {
  const [_id,setId]=useState(1);
  const [CustomerData,SetCustomerData]=useState({Pid:_id,EventType:'',StartDate:'',EndDate:'',Description:'',EventHandleBy:'',EventOrganisation:'',TotalEvents:''});
  const validation_type=[{'text':['EventType','StartDate','EndDate','Description','EventHandleBy','EventOrganisation','TotalEvents'],'date':['StartDate','EndDate']}];
  const [showNotification, setShowNotification] = useState(false);
  const setData=useDispatch();
  const  HandleInput=((e)=>{
    SetCustomerData((pre)=>({...pre,[e.target.id]:e.target.value}))
  })
  function  save(){
    const isValid=Validation.IsValid(validation_type,CustomerData);
    if(isValid){
        setId(_id+1);
        SetCustomerData({...CustomerData,Pid:_id});
        setData({type:'SaveEvent',payload:CustomerData});
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
        Clear();

      }
  }
function Clear() {
  SetCustomerData({Pid:_id,EventType:'',StartDate:'',EndDate:'',Description:'',EventHandleBy:'',EventOrganisation:'',TotalEvents:''})
};
  return (
          <div className='container mt-3 shadow w-100'> 
          <h1>Create Events</h1>
            <div className="row mb-4">
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="form-outline">
                    <label className="form-label" >Event Type</label>
                    <select value={CustomerData.EventType} onChange={HandleInput} id="EventType"  className="form-select">
                      <option value="">-----Select Type-----</option>
                      <option value="Sports">Sports</option>
                      <option value="Music">Music</option>
                      <option value="General">General</option>
                      <option value="Children">Children</option>
                      <option value="School">School</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="form-outline">
                  <label className="form-label">Start Date</label>
                  <input type="date"  selected={CustomerData.StartDate} value={CustomerData.StartDate} onChange={HandleInput}  id="StartDate" className="form-control" />
                </div>
                </div>
                <div className="col-md-4  col-sm-12 col-xs-12">
                  <div className="form-outline">
                  <label className="form-label">End Date</label>
                  <input type="date" selected={CustomerData.EndDate}  value={CustomerData.EndDate} onChange={HandleInput}  id="EndDate" className="form-control" />
                  </div>
                </div>
            </div>
        <div className="form-outline mb-4">
          <label className="form-label" >Description</label>
          <textarea className="form-control" value={CustomerData.Description} onChange={HandleInput} id="Description" rows="3"></textarea>
        </div>
        <div className="row  mb-4">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <label className="form-label" >Event Handle by</label>
              <input type="text"  value={CustomerData.EventHandleBy} onChange={HandleInput}  id="EventHandleBy" className="form-control" />
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <label className="form-label" >Event Organisation</label>
              <input type="text" value={CustomerData.EventOrganisation} onChange={HandleInput} id="EventOrganisation" className="form-control" />
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <label className="form-label">Total number of sub events</label>
              <input type="number" value={CustomerData.TotalEvents} onChange={HandleInput} id="TotalEvents" className="form-control" />
            </div>
        </div>
        <hr/>
        <div className="row">
        <div className="col-10 notification">
        {showNotification && <span><i className="fa-solid fa-check mx-2"></i>Event Created successfully!</span>}
          </div>
          <div className="col-2">
          <button type="button" className="btn" onClick={()=>{save()}}> <i className="fa-solid fa-floppy-disk"></i><span>Save</span></button>
        </div>
    </div>
    </div>
  )
}
