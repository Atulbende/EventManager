import AddEvent from '../AddEvent/AddEvent';
import EventList from '../EventList/EventLists';
export const MenuList= [{
    title:'Add Event',
    icon:'fa fa-home mr-3',
    link:'/AddEvent',
    component:<AddEvent/>,
    visible:true

},
{
    title:'Event List',
    icon:'fa fa-home mr-3',
    link:'/EventLists',
    component:<EventList/>,
    visible:true

}]
