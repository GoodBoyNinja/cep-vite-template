export { };

import "../public/CSInterface";
declare global {
    interface Window {
        cep_node: {
            Buffer: Function;
            global: object;
            process: object;
            require: Function
        };
    }
}