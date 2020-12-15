import './visual-mode.css';
import './__button/visual-mode__button-circle.css';
import './__button/visual-mode__button-line.css';
import './__button/_active/visual-mode__button-circle_active.css';
import './__button/_active/visual-mode__button-line_active.css';
import './__button/_no-active/visual-mode__button-circle_no-active.css';
import './__button/_no-active/visual-mode__button-line_no-active.css';

const VisualMode = () => {
  return (
    <div className="visual-mode">
      <button type='button' className="visual-mode__button-circle visual-mode__button-circle_active"></button>
      <button type='button' className="visual-mode__button-line visual-mode__button-line_no-active"></button>
    </div>
  );
}

export default VisualMode;