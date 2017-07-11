import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';

import { TableHeaderComponent } from "./widgets/table.header";
import { TableCellComponent } from "./widgets/table.cell";
import { CellEntityLineComponent } from "./widgets/cell.entity.line";
import { CssListTableComponent } from "./widgets/css.list.table";

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', CssListTableComponent)
        .dptr('table_header', TableHeaderComponent)
        .ptr('table_header', 'bug', '*', 'integer', TableHeaderComponent, { headerClass: 'w3-center'})
        .ptr('table_header', 'bug', '*', 'date', TableHeaderComponent, { headerClass: 'w3-center'})
        .ptr('table_header', 'issue', '*', 'integer', TableHeaderComponent, { headerClass: 'w3-center'})
        .ptr('table_header', 'issue', '*', 'date', TableHeaderComponent, { headerClass: 'w3-center'})
        .ptr('table_header', 'lead', '*', 'integer', TableHeaderComponent, { headerClass: 'w3-center'})
        .ptr('table_header', 'lead', '*', 'date', TableHeaderComponent, { headerClass: 'w3-center'})
        .der('table_line', CellEntityLineComponent)
        .dpr('table_cell', TableCellComponent)
        .pr('table_cell', 'bug', '*', 'integer', TableCellComponent, { tdClass: 'w3-center'})
        .pr('table_cell', 'bug', '*', 'date', TableCellComponent, { tdClass: 'w3-center'})
        .pr('table_cell', 'issue', '*', 'integer', TableCellComponent, { tdClass: 'w3-center'})
        .pr('table_cell', 'issue', '*', 'date', TableCellComponent, { tdClass: 'w3-center'})
        .pr('table_cell', 'lead', '*', 'integer', TableCellComponent, { tdClass: 'w3-center'})
        .pr('table_cell', 'lead', '*', 'date', TableCellComponent, { tdClass: 'w3-center'})
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
