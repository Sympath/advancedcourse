import * as React from "react";
import { memberAPI } from "../../api/member";
import { MemberEntity } from "../../model";
import { MemberHeader } from "./memberHeader";
import { MemberRow } from "./MemberRow";
// export const MembersPage: React.StatelessComponent<{}> = ()=>{
//     return (
//         <div className="row">
//             <h2>Members Page</h2>
//         </div>
//     )
// }
interface State {
    members: MemberEntity[]
}
interface Props {

}
export class MemberPage extends React.Component<Props,State> {
   constructor(props){
    super(props);
    this.state = {
        members: []
    }
   }
   /**
    * componentDidMount
    */
   public componentDidMount() {
       memberAPI.fetchMembers().then(members=>{
           this.setState({
               members
           })
       })
   }
   /**
    * render
    */
   public render() {
       return (
           <div>
               <table className="table">
                   <thead>
                       <MemberHeader/>
                   </thead>
                   <tbody>
                       
                       {
                          
                           this.state.members.map(
                               (member)=>{
                                   <MemberRow 
                                    key={member.id}
                                    member={member}
                                   />
                               }
                           )
                       }
                   </tbody>
               </table>
           </div>
       )
   }
}

