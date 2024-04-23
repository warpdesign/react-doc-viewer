import React, { useEffect, useState } from "react";
import styled from "styled-components";
import papaparse from "papaparse";
import { DocRenderer, IStyledProps } from "../..";
import { textFileLoader } from "../../utils/fileLoaders";

const CSVRenderer: DocRenderer = ({
  mainState: { currentDocument, config },
}) => {
  const [rows, setRows] = useState<string[][]>([]);

  useEffect(() => {
    if (currentDocument?.fileData) {
      const parseResult = papaparse.parse(currentDocument.fileData as string, {
        delimiter: config?.csvDelimiter ?? ",",
      });

      if (!parseResult.errors?.length && parseResult.data) {
        setRows(parseResult.data as string[][]);
      }
    }
  }, [currentDocument, config?.csvDelimiter]);

  if (!rows.length) {
    return null;
  }

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            {rows[0].map((column, i) => (
              <th key={`head_${i}`}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            i ? <tr key={`row_${i}`}>
              {row.map((column, j) => (
                <td key={`col_${i}_${j}`}>{column}</td>
              ))}
            </tr>
            : null
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CSVRenderer;

CSVRenderer.fileTypes = ["csv", "text/csv"];
CSVRenderer.weight = 0;
CSVRenderer.fileLoader = textFileLoader;

const Container = styled.div`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border: 1px solid ${(props: IStyledProps) => props.theme.textTertiary};
  background-color: ${(props: IStyledProps) => props.theme.tertiary};

  td {
    white-space: nowrap;
  }

  th,
  td {
    padding: 5px 10px;
    border: 1px solid ${(props: IStyledProps) => props.theme.textTertiary};
  }

  tr {
    vertical-align: top;
  }
`;
