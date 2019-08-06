import React from 'react';

import * as Styled from './styles';

class CFCell extends React.Component {
  constructor(props) {
    super(props);
    this.rerenderDammit = this.rerenderDammit.bind(this);
  }

  rerenderDammit() {
    this.forceUpdate();
  }

  componentDidMount() {
    window.addEventListener('resize', this.rerenderDammit);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.rerenderDammit);
  }

  render() {
    return (
      <Styled.CFCellWrapper width={window.innerWidth}>
        <Styled.ChipWrapper
          dropHeight={this.props.yPos + 1}
          value={this.props.value}
        >
          <Styled.CFChip
            value={this.props.value}
            yeet={this.props.yeet}
          />
        </Styled.ChipWrapper>
        <Styled.CFGridPiece key={window.innerWidth}>
          <Styled.CFGridHole key={window.innerWidth} />
        </Styled.CFGridPiece>
      </Styled.CFCellWrapper>
    );
  }
}

export default CFCell;
