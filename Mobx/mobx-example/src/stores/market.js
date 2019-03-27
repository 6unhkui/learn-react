import {observable, action, computed} from 'mobx';

export default class MarketStore {
    @observable selectItems = [];

    constructor(root) {
        this.root = root;
    }

    @action
    put = (name, price) => {
        const {number} = this.root.counter;

        console.log('action put');

        //존재하는지 찾고
        const exists = this.selectItems.find(item => item.name === name);
        if(!exists){
            //존재하지 않으면 
            this.selectItems.push({
                name,
                price,
                count : number,
            });

            return;
        }

        //존재한다면 count값만 ++
        exists.count += number;
    };

    @action
    take = name => {
        const itemToTake = this.selectItems.find(item => item.name === name);
        itemToTake.count--;

        if(itemToTake.count === 0){
            // 갯수가 0이면
            this.selectItems.remove(itemToTake);
        }
    };

    @computed
    get total() {
        console.log('총합 계산...');
        return this.selectItems.reduce((previous, current) => {
          return previous + current.price * current.count;
        }, 0);
    }
}