export default class Tab {
    constructor(json, object) {
        this.json = json;
        this.object = object;

        // -- format --: 
        // {
        //     'FIRST_LVL_TAB': {
        //         'SECOND_LVL_TAB': [
        //             'CONTENT',
        //             'CONTENT',
        //             'CONTENT',
        //         ]
        //     }
        // }
    }

} 