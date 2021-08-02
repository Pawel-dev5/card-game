import 'rsuite/dist/styles/rsuite-default.css';
import { Steps } from 'rsuite';
const styles = {
    width: '200px',
    display: 'inline-table',
    verticalAlign: 'top'
};
export const ProgressBar = ({ count, score }) => {
    return (
        <div className="progress-container">
            <div className="total-score">
                <h3>Round {count}/30</h3>
            </div>
            <Steps current={count - 1} vertical small style={styles}>
                <Steps.Item title="Round 1" description={score[1]} />
                <Steps.Item title="Round 2" description={score[2]} />
                <Steps.Item title="Round 3" description={score[3]} />
                <Steps.Item title="Round 5" description={score[5]} />
                <Steps.Item title="Round 6" description={score[6]} />
                <Steps.Item title="Round 7" description={score[7]} />
                <Steps.Item title="Round 8" description={score[8]} />
                <Steps.Item title="Round 9" description={score[9]} />
                <Steps.Item title="Round 10" description={score[10]} />
                <Steps.Item title="Round 11" description={score[11]} />
                <Steps.Item title="Round 12" description={score[12]} />
                <Steps.Item title="Round 13" description={score[13]} />
                <Steps.Item title="Round 14" description={score[14]} />
                <Steps.Item title="Round 15" description={score[15]} />
                <Steps.Item title="Round 16" description={score[16]} />
                <Steps.Item title="Round 17" description={score[17]} />
                <Steps.Item title="Round 18" description={score[18]} />
                <Steps.Item title="Round 19" description={score[19]} />
                <Steps.Item title="Round 21" description={score[21]} />
                <Steps.Item title="Round 22" description={score[22]} />
                <Steps.Item title="Round 23" description={score[23]} />
                <Steps.Item title="Round 24" description={score[24]} />
                <Steps.Item title="Round 25" description={score[25]} />
                <Steps.Item title="Round 26" description={score[26]} />
                <Steps.Item title="Round 27" description={score[27]} />
                <Steps.Item title="Round 28" description={score[28]} />
                <Steps.Item title="Round 29" description={score[29]} />
                <Steps.Item title="Round 30" description={score[30]} />
            </Steps>
        </div>
    )
}

