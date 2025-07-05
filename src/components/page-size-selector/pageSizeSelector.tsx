import { Form } from 'react-bootstrap';
import { PageSizeSelectorProps } from './pageSizeSelector.types';

export function PageSizeSelector({ pageSize, onChange }: PageSizeSelectorProps) {
  return (
    <Form.Group controlId="pageSizeSelect" className="d-inline-block">
      <Form.Label className="visually-hidden">Page Size</Form.Label>
      <Form.Select
        value={pageSize}
        size="sm"
        onChange={e => onChange(parseInt(e.target.value, 10))}
      >
        {[5, 10, 15, 20].map(n => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}
