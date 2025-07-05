import { JSX } from 'react';
import { Table } from 'react-bootstrap';

import './vulnerabilitiesList.css';
import VulnerabilityItem from '../vulnerability-item/vulnerabilityItem';
import { VulnerabilitiesListProps } from './vulnerabilitiesList.types';

const VulnerabilitiesList = ({ data }: VulnerabilitiesListProps): JSX.Element => {
  return (
    <div className="p-3 bg-white" style={{ borderRadius: 10 }}>
      <Table hover responsive className="vul-table">
        <thead>
          <tr>
            <th>STATUS</th>
            <th>TITLE</th>
            <th>TARGETS</th>
            <th>SOURCE</th>
            <th>TAGS</th>
            <th>DATE</th>
            <th>SEVERITY</th>
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
