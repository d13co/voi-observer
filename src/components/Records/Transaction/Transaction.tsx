import './Transaction.scss';
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {
    Grid
} from "@mui/material";
import {loadTransaction} from "../../../redux/actions/transaction";
import {CoreTransaction} from "../../../packages/core-sdk/classes/CoreTransaction";
import {microalgosToAlgos} from "algosdk";
import AlgoIcon from "../../AlgoIcon/AlgoIcon";
import {TXN_TYPES} from "../../../packages/core-sdk/constants";
import PaymentTransaction from './Types/PaymentTransaction/PaymentTransaction';
import AssetTransferTransaction from "./Types/AssetTransferTransaction/AssetTransferTransaction";
import AssetConfigTransaction from "./Types/AssetConfigTransaction/AssetConfigTransaction";
import KeyRegTransaction from "./Types/KeyRegTransaction/KeyRegTransaction";
import AppCallTransaction from "./Types/AppCallTransaction/AppCallTransaction";
import LinkToBlock from "../../Common/Links/LinkToBlock";
import LoadingTile from "../../Common/LoadingTile/LoadingTile";
import TransactionAdditionalDetails from "./Sections/TransactionAdditionalDetails/TransactionAdditionalDetails";
import TransactionNote from "./Sections/TransactionNotes/TransactionNote";
import {shadedClr} from "../../../utils/common";
import TransactionMultiSig from "./Sections/TransactionMultiSig/TransactionMultiSig";



function Transaction(): JSX.Element {
    const dispatch = useDispatch();
    const params = useParams();
    const {id} = params;

    const transaction = useSelector((state: RootState) => state.transaction);

    const txnInstance = new CoreTransaction(transaction.information);


    useEffect(() => {
        dispatch(loadTransaction(id));
    }, [dispatch, id]);

    return (<div className={"transaction-wrapper"}>
        <div className={"transaction-container"}>

            <div className="transaction-header">
                Transaction overview
            </div>

            {transaction.loading ? <LoadingTile></LoadingTile> : <div className="transaction-body">
                <div className="index">
                    #{txnInstance.getId()}
                </div>


                <div className="props" style={{background: shadedClr}}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <div className="property">
                                <div className="key">
                                    Type
                                </div>
                                <div className="value">
                                    {txnInstance.getTypeDisplayValue()}
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <div className="property">
                                <div className="key">
                                    Block
                                </div>
                                <div className="value">
                                    <LinkToBlock id={txnInstance.getBlock()}></LinkToBlock>
                                </div>
                            </div>
                        </Grid>


                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <div className="property">
                                <div className="key">
                                    Fee
                                </div>
                                <div className="value">
                                    {microalgosToAlgos(txnInstance.getFee())}
                                    <span style={{marginLeft: 5}}><AlgoIcon></AlgoIcon></span>

                                </div>
                            </div>
                        </Grid>



                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <div className="property">
                                <div className="key">
                                    Timestamp
                                </div>
                                <div className="value">
                                    {txnInstance.getTimestampDisplayValue() + ' GMT'}
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </div>


                {txnInstance.getType() === TXN_TYPES.PAYMENT ? <PaymentTransaction transaction={transaction}></PaymentTransaction> : ''}
                {txnInstance.getType() === TXN_TYPES.ASSET_TRANSFER ? <AssetTransferTransaction transaction={transaction}></AssetTransferTransaction> : ''}
                {txnInstance.getType() === TXN_TYPES.ASSET_CONFIG ? <AssetConfigTransaction transaction={transaction}></AssetConfigTransaction> : ''}
                {txnInstance.getType() === TXN_TYPES.KEY_REGISTRATION ? <KeyRegTransaction transaction={transaction}></KeyRegTransaction> : ''}
                {txnInstance.getType() === TXN_TYPES.APP_CALL ? <AppCallTransaction transaction={transaction}></AppCallTransaction> : ''}


                <TransactionNote transaction={transaction.information}></TransactionNote>
                <TransactionMultiSig transaction={transaction.information}></TransactionMultiSig>
                <TransactionAdditionalDetails transaction={transaction.information}></TransactionAdditionalDetails>
            </div>}
        </div>
    </div>);
}

export default Transaction;