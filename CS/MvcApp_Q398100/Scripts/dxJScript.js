function ExpandCollapseRow(index) {
    if (dxGridView.IsGroupRowExpanded(index))
        dxGridView.CollapseRow(index);
    else
        dxGridView.ExpandRow(index);
}