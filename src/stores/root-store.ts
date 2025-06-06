import headerStore from "./header-store";
import modalStore from "./modal-store";
import tokenStore from "./token-store";
import userStore from "./user-store.ts";
import testStore from "./test-store.ts";

class RootStore {
    header = headerStore;
    test = testStore
    modal = modalStore;
    user = userStore;
    token = tokenStore;
}

export default RootStore;