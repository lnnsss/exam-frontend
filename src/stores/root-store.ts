import headerStore from "./header-store";
import modalStore from "./modal-store";
import tokenStore from "./token-store";

class RootStore {
    header = headerStore;
    modal = modalStore;
    token = tokenStore;
}

export default RootStore;