
import React from "react";
import { TableNumber } from "../ConstantDatas/TableNumberArray";
import TableListCardData from "./TableListCardData";
import  '../StyleSheets/tableListStyle.css'

function TableList() {

    return (
        <>
            <div className="listData">
                {
                    TableNumber.map((element) => {
                        return (
                          <TableListCardData elements={element}></TableListCardData>
                        )
                    })
                }
            </div>
        </>
    )
}
export default TableList;