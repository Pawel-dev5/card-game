import { Steps } from "rsuite";
const styles = {
  width: "200px",
  display: "inline-table",
  verticalAlign: "top",
};
export const ProgressBar = ({ count, score }) => {
  return (
    <div className="progress-container">
      <div className="total-score">
        <h3>Round {count}/30</h3>
      </div>
      <Steps current={count - 1} vertical small style={styles}>
        <Steps.Item title={score[1]} />
        <Steps.Item title={score[2]} />
        <Steps.Item title={score[3]} />
        <Steps.Item title={score[4]} />
        <Steps.Item title={score[5]} />
        <Steps.Item title={score[6]} />
        <Steps.Item title={score[7]} />
        <Steps.Item title={score[8]} />
        <Steps.Item title={score[9]} />
        <Steps.Item title={score[10]} />
        <Steps.Item title={score[11]} />
        <Steps.Item title={score[12]} />
        <Steps.Item title={score[13]} />
        <Steps.Item title={score[14]} />
        <Steps.Item title={score[15]} />
        <Steps.Item title={score[16]} />
        <Steps.Item title={score[17]} />
        <Steps.Item title={score[18]} />
        <Steps.Item title={score[19]} />
        <Steps.Item title={score[20]} />
        <Steps.Item title={score[21]} />
        <Steps.Item title={score[22]} />
        <Steps.Item title={score[23]} />
        <Steps.Item title={score[24]} />
        <Steps.Item title={score[25]} />
        <Steps.Item title={score[26]} />
        <Steps.Item title={score[27]} />
        <Steps.Item title={score[28]} />
        <Steps.Item title={score[29]} />
        <Steps.Item title={score[30]} />
      </Steps>
    </div>
  );
};
