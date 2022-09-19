// import type { NodePlopAPI } from 'plop';
import { exec } from 'child_process';
import slugify from 'slugify';
import { DateTime } from 'luxon';

export default function (plop) {
    plop.setHelper('slug', (txt) => slugify(txt.toLowerCase()));
    plop.setPartial('today', DateTime.now().toFormat('yyyy-MM-dd'));
    plop.setPartial('now', DateTime.now().toISO());
    plop.setActionType('open', (params) => {
        exec(plop.renderString('code src/pages/journal/{{slug title}}.mdx', params));
    });

    // create your generators here
    plop.setGenerator('journal', {
        description: 'Creates a journal entry',
        prompts: [{
            type: 'input',
            name: 'title',
            message: 'What is the journal entry title?',
        }], // array of inquirer prompts
        actions: [{
            type: 'add',
            path: 'src/pages/journal/{{slug title}}.mdx',
            templateFile: 'generator/journal-entry.hbs',
        }, {
            type: 'open'
        }],
    });
};