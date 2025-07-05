import React from 'react';
import { Table } from 'react-bootstrap';

import './vulnerabilitiesList.css';
import VulnerabilityItem from '../vulnerability-item/vulnerabilityItem';
import { VulnerabilitiesListProps } from './vulnerabilitiesList.types';

const VulnerabilitiesList = ({ data }: VulnerabilitiesListProps): React.JSX.Element => {
  return (
    <div className="p-3 border-rounded" style={{ backgroundColor: 'white' }}>
      <Table hover responsive className="vul-table">
        <thead>
          <tr>
            <th>SEVERITY</th>
            <th>TITLE</th>
            <th>TARGETS</th>
            <th>SOURCE</th>
            <th>DATE</th>
            <th>TAGS</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {data.map(vul => (
            <VulnerabilityItem key={vul.id} vul={vul} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default VulnerabilitiesList;
