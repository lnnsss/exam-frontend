import headerStore from "./header-store";
import modalStore from "./modal-store";
import tokenStore from "./token-store";
import userStore from "./user-store.ts";

class RootStore {
    header = headerStore;
    modal = modalStore;
    user = userStore;
    token = tokenStore;
}

export default RootStore;