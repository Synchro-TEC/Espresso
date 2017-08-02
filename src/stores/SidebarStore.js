import { extendObservable, observable } from 'mobx';

class SidebarStore {
  @observable exemploDeVariavel = 'APENAS UM EXEMPLO';
}

export default new SidebarStore();
