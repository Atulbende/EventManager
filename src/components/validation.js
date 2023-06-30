import $ from "jquery";
export const Validation={
    IsValid:function(_v,obj){
                const _f=[];
                const _d=[]
                for(let [key,val] of Object.entries(obj)){
                        $('#'+key).removeClass('border border-danger');
                        $('.Valid__Msg').remove();
                        if(_v[0].text.includes(key)){
                                if(val=='' || val==undefined)_f.push(key);
                        }
                        if(_v[0].date.includes(key)){
                                        _d.push(val);
                        }     
                }
                if(_f.length>0){
                        _f.map((v)=>{
                                $('#'+v).addClass('border border-danger');
                                $('#'+v).after(`<div class="Valid__Msg required-msg-shake"><p>Input Required  : ${v.match(/[A-Z][a-z]+|[0-9]+/g).join(" ").toString()}</p></div>`);
                        })
                        return false;
                }
                const StartDate = new Date(_d[0]);
                const EndDate = new Date(_d[1]);
                if(StartDate>EndDate){
                                $('#'+_v[0].date[0]).addClass('border border-danger');
                                $('#'+_v[0].date[0]).after(`<div class="Valid__Msg required-msg-shake"><p>Start Date must less then End Date</p></div>`);
                        return false;
                }

             return true;
           

    }                
}