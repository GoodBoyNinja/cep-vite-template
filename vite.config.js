import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { bundleManifest } from 'rollup-plugin-bundle-cep-manifest';
import importExtendScript from 'rollup-plugin-import-extendscript';
import zxp from 'rollup-plugin-zxp';
import Inspect from 'vite-plugin-inspect';
import license from 'rollup-plugin-license';
import copy from 'rollup-plugin-copy';
import * as dotenv from 'dotenv';
import { viteSingleFile } from "vite-plugin-singlefile";

dotenv.config();

export default defineConfig({
    base: './',
    plugins: [
        nodePolyfills({ protocolImports: true }),
        importExtendScript({
            explicit: true
        }),
        viteSingleFile(),
        // Inspect({}),
    ],

    build: {
        rollupOptions: {
            plugins: [
                bundleManifest(),
                license({
                    thirdParty: {
                        includePrivate: true,
                        output: {
                            file: 'dist/LICENSES.txt',
                            encoding: 'utf-8', // default: utf-8
                        },
                    },
                }),
                copy({
                    targets: [
                        { src: '.debug', dest: 'dist' },
                    ],
                    hook: 'writeBundle',
                }),
                zxp({
                    selfSignedCert: {
                        country: process.env.CERT_COUNTRY,
                        province: process.env.CERT_PROVINCE,
                        org: process.env.CERT_ORG,
                        name: process.env.CERT_NAME,
                        password: process.env.CERT_PASSWORD,
                        email: process.env.CERT_EMAIL,
                    },
                    sign: {
                        password: process.env.CERT_PASSWORD,
                        output: `/dist/%TOOLNAME%.zxp`
                    },
                    gitIgnore: [`.env`, `*.p12`],
                })
            ],
            external: ['cep_node'],
            output: {
                format: 'cjs',
                preserveModules: false,
            }
        },
        target: 'chrome74'
        // sourcemap: true
    },
});


