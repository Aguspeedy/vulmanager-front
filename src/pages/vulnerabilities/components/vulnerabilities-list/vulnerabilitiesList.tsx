import React from 'react';
import VulnerabilityItem from '../vulnerability-item/vulnerabilityItem';
import { Vulnerability } from '../../../../types/models/vulnerability';
import { Table } from 'react-bootstrap';

interface VulnerabilitiesListProps {
  data: Vulnerability[];
}

const VulnerabilitiesList = ({
  data,
}: VulnerabilitiesListProps): React.JSX.Element => {
  return (
    <Table striped bordered hover responsive size="sm">
      <thead>
        <tr>
          <th>Severity</th>
          <th>Title</th>
          <th>Targets</th>
          <th>Source</th>
          <th>Tags</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map(vul => (
          <VulnerabilityItem key={vul.id} vul={vul} />
        ))}
      </tbody>
    </Table>
  );
};
export default VulnerabilitiesList;
