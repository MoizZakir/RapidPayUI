import React from 'react'
import '../../style/Payment-plugins/screen1.css'
import { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';

import ReactDOM from 'react-dom'
import ReactCodeSinppet from 'react-code-snippet'
import { RiErrorWarningFill } from 'react-icons/ri';
import { Snippet } from '@nextui-org/snippet';


const Screen1 = () => {
  const navigate = useNavigate()
  const code1=`@Parcelize
@Serializable
data class TransactionReceipt(

    @SerialName("id")
    val receipt_id: String,

    @SerialName("transaction_uuid")
    val transaction_uuid: String,

    @SerialName("merchant")
    val merchant: Merchant,

    @SerialName("start_date")
    val start_date: String,

    @SerialName("start_time")
    val start_time: String,

    @SerialName("card_scheme_sponsor")
    val card_scheme_sponsor: String,

    @SerialName("tid")
    val tid: String,

    @SerialName("system_trace_audit_number")
    val system_trace_audit_number: String,

    @SerialName("pos_software_version_number")
    val pos_software_version_number: String,

    @SerialName("retrieval_reference_number")
    val retrieval_reference_number: String,

    @SerialName("card_scheme")
    val card_scheme: NameField<String>,

    @SerialName("transaction_type")
    val transaction_type: NameField<String>,

    @SerialName("pan")
    val pan: String,

    @SerialName("card_expiration")
    val card_expiration: String,

    @SerialName("amount_authorized")
    val amount_authorized: LabelField<String>,

    @SerialName("amount_other")
    val amount_other: LabelField<String>,

    @SerialName("currency")
    val currency: LocalizationField,

    @SerialName("status_message")
    val status_message: LocalizationField,

    @SerialName("is_approved")
    val is_approved: Boolean,

    @SerialName("is_refunded")
    val is_refunded: Boolean,

    @SerialName("is_reversed")
    val is_reversed: Boolean,

    @SerialName("approval_code")
    val approval_code: LabelField<String>?,

    @SerialName("verification_method")
    val verification_method: LocalizationField,

    @SerialName("end_date")
    val end_date: String,

    @SerialName("end_time")
    val end_time: String,

    @SerialName("receipt_line_one")
    val receipt_line_one: LocalizationField,

    @SerialName("receipt_line_two")
    val receipt_line_two: LocalizationField,

    @SerialName("thanks_message")
    val thanks_message: LocalizationField,

    @SerialName("save_receipt_message")
    val save_receipt_message: LocalizationField,

    @SerialName("entry_mode")
    val entry_mode: String,

    @SerialName("action_code")
    val action_code: String,

    @SerialName("application_identifier")
    val application_identifier: String,

    @SerialName("terminal_verification_result")
    val terminal_verification_result: String,

    @SerialName("transaction_state_information")
    val transaction_state_information: String,

    @SerialName("cardholader_verfication_result")
    val cardholader_verfication_result: String,

    @SerialName("cryptogram_information_data")
    val cryptogram_information_data: String,

    @SerialName("application_cryptogram")
    val application_cryptogram: String,

    @SerialName("kernel_id")
    val kernel_id: String,

    @SerialName("payment_account_reference")
    val payment_account_reference: String?,

    @SerialName("pan_suffix")
    val pan_suffix: String?,

    @SerialName("created_at")
    val created_at: String? = "",

    @SerialName("updated_at")
    val updated_at: String? = "",

    @SerialName("qr_code")
    val qr_code: String

): Parcelable
   `
const code2=`sealed class SetupFailure {
    object AlreadyInstalled : SetupFailure()
    object NotInstalled : SetupFailure()
    data class AuthenticationFailed(val message: String) : SetupFailure()
    data class InvalidStatus(val status: List<StatusCheckError>) : SetupFailure()
}

    
`
const code3=`sealed class PurchaseFailure {
    data class PurchaseDeclined(val receipt: TransactionReceipt?): PurchaseFailure()
    data class PurchaseRejected(val message: String): PurchaseFailure()
    data class AuthenticationFailed(val message: String): PurchaseFailure()
    data class InvalidStatus(val status: List<StatusCheckError>): PurchaseFailure()
    object GeneralFailure: PurchaseFailure()
}`
const code4=`sealed class RefundFailure {
    data class RefundDeclined(val receipt: TransactionReceipt?): RefundFailure()
    data class RefundRejected(val message: String): RefundFailure()
    data class AuthenticationFailed(val message: String): RefundFailure()
    data class InvalidStatus(val status: List<StatusCheckError>): RefundFailure()
    object GeneralFailure: RefundFailure()
}
 `
const code5=`
  sealed class ReconcileFailure {
    data class FailureMessage(val message: String) : ReconcileFailure()
    data class AuthenticationFailed(val message: String): ReconcileFailure()
    data class InvalidStatus(val status: List<StatusCheckError>): ReconcileFailure()
    object GeneralFailure: ReconcileFailure()
}

`
const code6=`
sealed class GetDataFailure{
    data class FailureMessage(val message: String) : GetDataFailure()
    data class AuthenticationFailed(val message: String): GetDataFailure()
    data class InvalidStatus(val status: List<StatusCheckError>): GetDataFailure()
    object GeneralFailure: GetDataFailure()
    object InvalidAdminPin: GetDataFailure()

}`
const code7=`

@Parcelize
@Serializable
data class ReconciliationReceipt(

    @SerialName("id")
    val id: String,

    @SerialName("date")
    val date: String,

    @SerialName("time")
    val time: String,

    @SerialName("is_balanced")
    val is_balanced: LabelField<Boolean>,

    @SerialName("details")
    val details: ReconciliationDetails,

    @SerialName("schemes")
    val schemes: List<ReconciliationSchemes> = emptyList(),

    @SerialName("currency")
    val currency: LocalizationField,

    @SerialName("qr_code")
    val qr_code: String,

    @SerialName("merchant")
    val merchant: Merchant,

    @SerialName("card_acceptor_terminal_id")
    val tid: String,

    @SerialName("system_trace_audit_number")
    val system_trace_audit_number: String,

    @SerialName("pos_software_version_number")
    val pos_software_version_number: String,


): Parcelable

@Parcelize
@Serializable
data class ReconciliationDetails(

    @SerialName("purchase")
    val purchase: ReconciliationLabelField,

    @SerialName("refund")
    val refund: ReconciliationLabelField,

    @SerialName("purchase_reversal")
    val purchase_reversal: ReconciliationLabelField,

    @SerialName("refund_reversal")
    val refund_reversal: ReconciliationLabelField,

    @SerialName("total")
    val total: ReconciliationLabelField

) : Parcelable

@Parcelize
@Serializable
data class ReconciliationSchemes(

    @SerialName("name")
    val name: LabelField<String>,

    @SerialName("pos")
    val pos: ReconciliationSchemesDetails,

    @SerialName("host")
    val host: ReconciliationSchemesDetails

) : Parcelable

@Parcelize
@Serializable
data class ReconciliationSchemesDetails(

    @SerialName("debit")
    val debit: ReconciliationLabelField,

    @SerialName("credit")
    val credit: ReconciliationLabelField,

    @SerialName("total")
    val total: ReconciliationLabelField,

    ) : Parcelable


@Parcelize
@Serializable
data class ReconciliationLabelField(
    @SerialName("label")
    val label: LocalizationField,

    @SerialName("total")
    val total: String,

    @SerialName("count")
    val count: Int
) : Parcelable

@Parcelize
@Serializable
data class Merchant(

    @SerialName("id")
    val id: String,

    @SerialName("name")
    val name: LocalizationField,

    @SerialName("address")
    val address: LocalizationField,

    @SerialName("category_code")
    val category_code: String

): Parcelable

`
const code8=`@Parcelize
@Serializable
data class ReconciliationList(

    @SerialName("total")
    val total: Int,

    @SerialName("reconciliations")
    val reconciliations: List<ReconciliationItem> = emptyList()

) : Parcelable

@Parcelize
@Serializable
data class ReconciliationItem(

    @SerialName("id")
    val id: String,

    @SerialName("date")
    val date: String,

    @SerialName("time")
    val time: String,

    @SerialName("is_balanced")
    val is_balanced: LabelField<Boolean>,

    @SerialName("total")
    val total: String,

    @SerialName("currency")
    val currency: LocalizationField

) : Parcelable

`
const code9=`@Parcelize
@Serializable
data class Session(
    @SerialName("id")
    val id: String,

    @SerialName("status")
    val status: String,

    @SerialName("type")
    val type: String,

    @SerialName("client_id")
    val client_id: String,

    @SerialName("amount")
    val amount: String,

    @SerialName("expired_at")
    val expired_at: String,

    @SerialName("reference_id")
    val reference_id: String?,

    @SerialName("created_at")
    val created_at: String,

    @SerialName("updated_at")
    val updated_at: String,

    @SerialName("transaction")
    val transaction: Transaction?,
) : Parcelable

@Parcelize
@Serializable
data class Transaction(
    @SerialName("id")
    val id: String?,

    @SerialName("uuid")
    val uuid: String?,

    @SerialName("amount_authorized")
    val amount_authorized: String?,

    @SerialName("transaction_currency_code")
    val transaction_currency_code: String?,

    @SerialName("cardholder_verification_result")
    val cardholder_verification_result: String?,

    @SerialName("lat")
    val lat: String?,

    @SerialName("lon")
    val lon: String?,

    @SerialName("transaction_type")
    val transaction_type: String?,

    @SerialName("card_scheme_id")
    val card_scheme_id: String?,

    @SerialName("system_trace_audit_number")
    val system_trace_audit_number: String?,

    @SerialName("is_approved")
    val is_approved: Boolean?,

    @SerialName("is_reversed")
    val is_reversed: Boolean?,

    @SerialName("is_reconcilied")
    val is_reconcilied: Boolean?,

    @SerialName("device_id")
    val device_id: String?,

    @SerialName("user_id")
    val user_id: String?,

    @SerialName("merchant_id")
    val merchant_id: String?,

    @SerialName("customer_reference_number")
    val customer_reference_number: String?,

    @SerialName("pos_confirmed")
    val pos_confirmed: Boolean?,

    @SerialName("created_at")
    val created_at: String?,

    @SerialName("updated_at")
    val updated_at: String?,

    @SerialName("receipts")
    val receipts: List<TransactionReceipt> = emptyList(),

    @SerialName("card_scheme")
    val card_scheme: LocalizationField,

    @SerialName("type")
    val type: LocalizationField,

    @SerialName("verification_method")
    val verification_method: LocalizationField,

    ) : Parcelable


`
const code10=`
@Parcelize
@Serializable
data class TransactionBannerList(

    @SerialName("total")
    val total: Int,

    @SerialName("transactions")
    val transactionBanners: List<TransactionBanner> = emptyList()

): Parcelable

@Parcelize
@Serializable
data class TransactionBanner(

    @SerialName("uuid")
    val uuid: String,

    @SerialName("scheme")
    val scheme: String,

    @SerialName("pan")
    val pan: String,

    @SerialName("amount_authorized")
    val amount_authorized: String,

    @SerialName("currency")
    val currency: LocalizationField,

    @SerialName("transaction_type")
    val transaction_type: TransactionType,

    @SerialName("is_approved")
    val is_approved: Boolean,

    @SerialName("is_reversed")
    val is_reversed: Boolean,

    @SerialName("start_date")
    val start_date: String,

    @SerialName("start_time")
    val start_time: String,

    @SerialName("customer_reference_number")
    val customer_reference_number: String? = null

): Parcelable


`
const code11=`
sealed class GetDataFailure{
    data class FailureMessage(val message: String) : GetDataFailure()
    data class AuthenticationFailed(val message: String): GetDataFailure()
    data class InvalidStatus(val status: List<StatusCheckError>): GetDataFailure()
    object GeneralFailure: GetDataFailure()
    object InvalidAdminPin: GetDataFailure()
}


`
const code12=`
sealed class GetTransactionFailure {
    data class FailureMessage(val message: String) : GetTransactionFailure()
    data class AuthenticationFailed(val message: String): GetTransactionFailure()
    data class InvalidStatus(val status: List<StatusCheckError>): GetTransactionFailure()
    object InvalidAdminPin: GetTransactionFailure()
    object GeneralFailure: GetTransactionFailure()
}



`
const code13=`
sealed class ReversalFailure{
    data class FailureMessage(val message: String) : ReversalFailure()
    data class AuthenticationFailed(val message: String): ReversalFailure()
    data class InvalidStatus(val status: List<StatusCheckError>): ReversalFailure()
    object GeneralFailure: ReversalFailure()
}


`
const code14=`
sealed class LogoutFailure {
    object AlreadyLoggedOut : LogoutFailure()
    object GeneralFailure : LogoutFailure()
}


`
const code15=`
data class SessionData(
    val connectionType: ConnectionType,
    val sessionUUID: UUID,
    val metaData: MetaDataObject?
)


`
const code16=`
@Parcelize
@Serializable
data class SessionInfo(
    @SerialName("userName")
    val userName: String?,

    @SerialName("phone")
    val phone: String?,

    @SerialName("email")
    val email: String?,

    @SerialName("tid")
    val tid: String?,

    @SerialName("merchantEn")
    val merchantEn: String?,

    @SerialName("merchantAr")
    val merchantAr: String?,
) : Parcelable



`
const code17=`
sealed class SessionFailure {
    data class FailureMessage(val message: String) : SessionFailure()
    data class AuthenticationFailed(val message: String): SessionFailure()
    data class InvalidStatus(val status: List<StatusCheckError>): SessionFailure()
    object GeneralFailure: SessionFailure()
}

`
const code18=`
enum class StatusCheckError {
    UNSUPPORTED_SDK_VERSION,
    NOT_INSTALLED,
    UNSUPPORTED_DEVICE,
    UPDATED_REQUIRED,
    TERMINAL_UPDATING,
    TERMINAL_RECONCILING,
    NFC_DISABLED,
    NFC_NOT_FOUND,
    CONNECTIVITY_UNAVAILABLE,
    NOT_SECURE,
    DEV_MODE_ON,
    LOCATION_MISSING,
    LOCATION_PERMISSION_MISSING,
    VPN_DETECTED,
    OPERATION_NOT_SUPPORTED;
}


`


  return (
    <div style={{}} className='faq-screen1'>
      <h2 style={{ fontWeight: '600' }}>SDK - Models</h2>
      <div style={{minHeight:"100px",fontSize:'14px', padding:'15px',paddingLeft:"25px",paddingRight:"25px",width:'100%' ,border:'1px solid rgba(239,68,68,.2)', backgroundColor:'hsla(0, 86%, 97%, .5)'}}>

      <span >
      <RiErrorWarningFill color='red' size={20} style={{marginRight:"5px"}} />RapidPay services compatible 
      with devices running 
      Android API 26 or higher, otherwise UNSUPPORTED_SDK_VERSION will returned</span>

      </div>
      
      <div>
        <h4>Transaction Reciept</h4>
        
        <div className='ma1'>
       
        <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code1}
        </Snippet>
        </div>
        </div>
        <h5>Card Scheme</h5>
        <div className='ma1'>
        <table>
        <tr className='tr1'>
            <th className='th1'> Id</th>
            <th className='th2'> Network</th>
            </tr>
            <tr>
            <td>MC</td>
            <td>Mastercard - credit</td>
            </tr>
            <tr>
            <td>DM</td>
            <td>Maestro</td>
            </tr>
            <tr>
            <td>P1</td>
            <td>Mada</td>
            </tr>
            <tr>
            <td>VC</td>
            <td>Visa</td>
            </tr>
            <tr>
            <td>UP</td>
            <td>Union Pay</td>
            </tr>
            <tr>
            <td>DC</td>
            <td>Discover</td>
            </tr>
            <tr>
            <td>JC</td>
            <td>JCB</td>
            </tr>
            <tr>
            <td>AX</td>
            <td>	
            American Express</td>
            </tr>
            <tr>
            <td>GN</td>
            <td>	
            GCCNET</td>
            </tr>

        </table>

        </div>
        <h5>Transaction type</h5>
        <div className='ma1'>
        <table>
        <tr className='tr1'>
            <th className='th1'> Id</th>
            <th className='th2'> Type</th>
            </tr>
            <tr>
            <td>00</td>
            <td>	
            PURCHASE</td>
            </tr>
            <tr>
            <td>20</td>
            <td>	
            REFUND</td>
            </tr>
           
           

        </table>

        </div>
        <div className='ma1'>
            <h5>Setup Error</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code2}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Purchase Error</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code3}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Refund Error</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code4}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Reconcile Error</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code5}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Reconcile List Error</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code6}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Reconcile Data</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code7}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Reconcile List Data</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code8}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Session Data</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code9}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Transaction Data</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code10}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Transaction List Error</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code11}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Transaction by id Error</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code12}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Reverse Error</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code13}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Logout Error</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code14}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Session Data</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code15}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Get User Session Info Data</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code16}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Get User Session Error</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code17}
        </Snippet>
        </div>
        <div className='ma1'>
            <h5>Status check error</h5>
            <Snippet className='snp' style={{backgroundColor:"black",color:'white'}}  >
       {code18}
        </Snippet>
        </div>
      <div className='Quick-btn'>
        <button>Next</button>
      </div>
      
    </div>
  )
}

export default Screen1