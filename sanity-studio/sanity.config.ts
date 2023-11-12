import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { schemaTypes } from './schemas'

export default defineConfig({
    name: 'default',
    title: 'Portfolio',

    projectId: 'du7e8s5p',
    dataset: 'production',

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})
