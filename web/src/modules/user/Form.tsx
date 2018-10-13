import * as React from 'react';
import { Input } from 'src/ui/Input';
import { RedButton } from 'src/ui/RedButton';

interface State {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (data: State) => void;
  buttonText: string;
}

export class Form extends React.PureComponent<Props> {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    } as any);
  };

  render() {
    const { password, email } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <Input
            label="Email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={this.handleChange}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <RedButton onClick={() => this.props.onSubmit(this.state)}>
          {this.props.buttonText}
        </RedButton>
      </div>
    );
  }
}
