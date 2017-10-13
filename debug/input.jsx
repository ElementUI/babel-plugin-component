import { Button as MyBu } from 'element-ui';

console.log(MyBu);

const Bt2 = MyBu

const LeftBar = {
    data() {
        return {
            firstName: 'Wfghjfghjghjalter11',
            lastName: 'ghjkhbnhWhitesdfghjkdfghjkl;',
            alias: 'jkhkhhlkhHeisenberg'
        };
    },
    render() {
        console.log(MyBu);
        let Bt = MyBu;
        return (<div>
            <div> {this.firstName} </div>
            <MyBu>ClickMe</MyBu>
        </div>);
    }
};
export default LeftBar;
