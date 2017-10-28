import { Button } from 'element-ui';

console.log(Button);

const Bt2 = Button

const LeftBar = {
    data() {
        return {
            firstName: 'Wfghjfghjghjalter11',
            lastName: 'ghjkhbnhWhitesdfghjkdfghjkl;',
            alias: 'jkhkhhlkhHeisenberg'
        };
    },
    render() {
        console.log(Button);
        let Bt = Button;
        return (<div>
            <div> {this.firstName} </div>
            <Button>ClickMe</Button>
        </div>);
    }
};
export default LeftBar;
