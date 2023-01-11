import './bootstrap';
import React from "react";
import { render } from "react-dom";
import { createinertiaApp } from "@inertiajs/inertia-react";

createInertiaApp({
    resolve: name => import(`.Pages/${name}`),
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    }
});
