import {ACTIVE_LOADER, DESACTIVE_LOADER} from "../constants/loader";

export const activeLoader = () => ({
    type: ACTIVE_LOADER,
});

export const desactiveLoader = () => ({
    type: DESACTIVE_LOADER,
});
