import React from 'react';
import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import '../App.css'
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: [],
            category: [
                {
                    id: 1,
                    name: "Food",
                    mcc: [123, 234, 345, 456, 122, 677]
                },
                {
                    id: 2,
                    name: "Flight",
                    mcc: [223, 334, 445, 556, 222, 777]
                },
                {
                    id: 3,
                    name: "Auto",
                    mcc: [23, 209]
                },
                {
                    id: 4,
                    name: "Hotel",
                    mcc: [340, 458, 192]
                },
                {
                    id: 5,
                    name: "Convenience",
                    mcc: [923, 434, 45, 56]
                },
                {
                    id: 6,
                    name: "Apparel",
                    mcc: [1]
                },
                {
                    id: 7,
                    name: "other",
                    mcc: [72]
                }
            ],
            transaction:
                [
                    {
                        id: 1,
                        merchant: "Starbucks",
                        mcc: 234
                    },
                    {
                        id: 2,
                        merchant: "Indigo",
                        mcc: 223
                    },
                    {
                        id: 3,
                        merchant: "Volkswagen",
                        mcc: 209
                    },
                    {
                        id: 4,
                        merchant: "Taj Vivanta",
                        mcc: 340
                    },
                    {
                        id: 5,
                        merchant: "Zara",
                        mcc: 1
                    },
                    {
                        id: 6,
                        merchant: "Maruti",
                        mcc: 23
                    }
                ]
        };
    }

    componentWillMount() {
        this.setState({
            input: this.state.transaction
        })
        for (let j = 0; j < this.state.transaction.length; j++) {
            for (let i = 0; i < this.state.category.length; i++) {
                if (this.state.category[i].mcc.includes(this.state.transaction[j].mcc)) {
                    this.state.transaction[j].categoryy = {
                        id: this.state.category[i].id,
                        name: this.state.category[i].name
                    };
                }
            }
        }
    }
    componentWillUnmount() {
        // alert(JSON.stringify(alertData));
    }
    handleClick = (e, mcc) => {
        alert(mcc)
    }
    handleAreaClick = (e, index) => {
        let alertData = {
            id: index.id,
            mcc: index.mcc,
            merchant: index.merchant,
            categoryName: index.categoryy.name
        };
        alert(JSON.stringify(alertData));
    };
    render() {
        let output = this.state.input;
        return (
            <div className="container"
                style={{
                    display: "flex",
                    height: "120vh",
                    width: "100vw",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}>
                {output.map((data, key) => {
                    return (
                        <Card
                            style={{
                                display: "flex",
                                height: "300px",
                                width: "300px",
                                flexDirection: "column",
                                margin: "10px",
                                justifyContent: "center",
                                backgroundColor: "light-gray",
                                borderRadius: "15px", border: "1px solid #dadce0",

                            }} onClick={e => this.handleAreaClick(e, data)}
                        >
                            <CardContent>
                                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                    <div>
                                        <Chip
                                            color="primary"
                                            label={data.merchant}
                                            avatar={<Avatar>M</Avatar>}
                                        />
                                    </div>
                                    <div>
                                        <Button variant="contained"
                                            onClick={event => {
                                                this.handleClick(event, data.mcc);
                                            }}
                                            // disabled
                                        // onClick={alert(`${data.mcc}`)}
                                        >mcc</Button>
                                    </div>
                                </div>
                            </CardContent>
                            <CardActions>
                                <div style={{ padding: "10px" }}>
                                    <Chip
                                        color="secondary"
                                        variant="outlined"
                                        avatar={<Avatar>N</Avatar>}
                                        label={data.categoryy.name}
                                    />
                                </div>
                            </CardActions>
                        </Card>
                    )
                })}
            </div>
        )
    }
}
export default Dashboard;