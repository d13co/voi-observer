import './KeyRegTransaction.scss';
import React from "react";
import {Grid, Link} from "@mui/material";
import {theme} from "../../theme";
import pSBC from 'shade-blend-color';
import {CoreTransaction} from "../../packages/core-sdk/classes/CoreTransaction";


function KeyRegTransaction(props): JSX.Element {
    const transaction = props.transaction;

    const shadedClr = pSBC(0.95, theme.palette.primary.main);
    const txnInstance = new CoreTransaction(transaction.information);
    const keyRegPayload = txnInstance.getKeyRegPayload();


    return (<div className={"keyreg-transaction-wrapper"}>
        <div className={"keyreg-transaction-container"}>
            <div className="keyreg-transaction-header">
                Key registration
            </div>
            <div className="keyreg-transaction-body">

                <div className="props" style={{background: shadedClr}}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div className="property">
                                <div className="key">
                                    Sender
                                </div>
                                <div className="value small">
                                    <Link href={"/account/" + txnInstance.getFrom()}>{txnInstance.getFrom()}</Link>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div className="property">
                                <div className="key">
                                    Vote participation key
                                </div>
                                <div className="value small">
                                    {keyRegPayload["vote-participation-key"]}
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div className="property">
                                <div className="key">
                                    Selection participation key
                                </div>
                                <div className="value small">
                                    {keyRegPayload["selection-participation-key"]}
                                </div>
                            </div>
                        </Grid>


                        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                            <div className="property">
                                <div className="key">
                                    Vote first valid
                                </div>
                                <div className="value small">
                                    <Link href={"/block/" + keyRegPayload["vote-first-valid"]}>{keyRegPayload["vote-first-valid"]}</Link>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                            <div className="property">
                                <div className="key">
                                    Vote last valid
                                </div>
                                <div className="value small">
                                    <Link href={"/block/" + keyRegPayload["vote-last-valid"]}>{keyRegPayload["vote-last-valid"]}</Link>
                                </div>
                            </div>
                        </Grid>


                        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                            <div className="property">
                                <div className="key">
                                    Vote key dilution
                                </div>
                                <div className="value small">
                                    {keyRegPayload["vote-key-dilution"]}
                                </div>
                            </div>
                        </Grid>





                    </Grid>
                </div>

            </div>
        </div>
    </div>);
}

export default KeyRegTransaction;