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
  const code1=`{
    "terminals": [
        {
            "id": "88d5425e-6b4d-448f-b7da-344e319f6aad",
            "tid": "0200127500001275",
            "merchant": {
                "id": "2d527b01-bb24-40fe-ad95-7110c5104c62",
                "name": "Dammam Branch",
                "name_ar": "فرع الدمام"
            },
            "user": {
                "id": "3a79a541-4c9a-4a93-b0e9-ecd6d05d3e19",
                "name": "mohammed",
                "mobile": "+9665******",
                "email": "for**t@gmail.com"
            },
            "is_assigned_to_user": true,
            "is_connected": true,
            "created_at": "2023-07-17T09:04:07.428Z",
            "updated_at": "2023-08-17T08:19:17.622Z"
        },
        {
            "id": "f873a168-ffea-48ba-9e80-61ba00049679",
            "tid": "0200126300001263",
            "merchant": {
                "id": "eaa09f58-4d53-49ca-a44f-0e27fcbb1ff5",
                "name": "shaker",
                "name_ar": "احمد"
            },
            "user": {
                "id": "c63dbd29-d884-40c5-8034-3d703751b5d3",
                "name": "ahmad",
                "mobile": "+96656*****",
                "email": ""
            },
            "is_assigned_to_user": true,
            "is_connected": true,
            "created_at": "2023-07-16T08:22:58.951Z",
            "updated_at": "2023-07-20T11:21:02.038Z"
        },
        {
            "id": "0c28a13e-ab64-4ad8-99ea-dae802be8080",
            "tid": "0200120000001200",
            "merchant": {
                "id": "eaa09f58-4d53-49ca-a44f-0e27fcbb1ff5",
                "name": "shaker",
                "name_ar": "احمد"
            },
            "user": null,
            "is_assigned_to_user": false,
            "is_connected": true,
            "created_at": "2023-07-09T12:38:58.159Z",
            "updated_at": "2023-07-30T15:25:07.693Z"
        }
    ],
    "pages": {
        "total": 1,
        "current": 1
    }
}`
const code2=`{
    "terminal": {
        "id": "16f4fe15-9d2c-4d32-b73d-630c5983a28d",
        "tid": "0209221600092216",
        "merchant": {
            "id": "2d527b01-bb24-40fe-ad95-7110c5104c62",
            "name": "Dammam Branch",
            "name_ar": "فرع الدمام"
        },
        "user": {
            "id": "676095e8-5a25-4a9c-a8a4-f32337a1329e",
            "name": "shaker",
            "mobile": "+96656*****",
            "email": "a*****@nearpay.io"
        },
        "is_connected": true,
        "connections": [
            {
                "id": "e44b2a5b-934f-4745-b7e2-45f93db7457a",
                "device": {
                    "id": "760db1cd-77a9-4a1f-ab78-f1b0a71e4d91"
                }
            }
        ],
        "is_assigned_to_user": true
    }
}
`
const code3=`{
    "message": "Terminal disconnected successfully!"
}`
const code4=`{
  "name":"Ahmad",
  "email":"ahmad@gmail.com",
  "mobile":"+96656******"
}`
const code5=`{
  "terminal": {
      "id": "6a34a341-4b45-48c4-8848-6dcf874747be",
      "tid": "0209220900092209",
      "merchant": {
          "name": "Riyadh Branch",
          "name_ar": "فرع الرياض"
      },
      "user": {
          "id": "e14c359b-155b-4677-af70-46c5ba5b3129",
          "name": "Ahmad",
          "mobile": "+96656******",
          "email": "ahmad@gmail.com"
      },
      "device": {},
      "is_connected": false,
      "is_assigned_to_user": true
  }
}
`
const code6=`{
    "terminal": {
        "tid": "0209220900092209",
        "message": "Terminal unassigned successfully!",
        "is_assigned_to_user": false
    }
}`
const code7=`{
    "transactions": [
        {
            "id": "f2190ab9-3048-4364-a6f7-ce3ce53a3b16",
            "created_at": "2023-09-28T08:54:49.563Z",
            "internet": {
                "type": "wifi",
                "speed": "271"
            },
            "is_reconcilied": false,
            "terminal": {
                "tid": "1881001155119328"
            },
            "device": {
                "id": "c3ed2df1-ede2-402d-87d1-f0b59850f537",
                "status": "new",
                "type": "phone"
            },
            "merchant": {
                "id": "8898300e-6469-4807-9f4a-c8919b1a8fba",
                "name": "NearPay Test Merchant 2 - SBF",
                "name_ar": "نيرباي 2"
            },
            "user": {
                "id": "ae65c798-73de-42be-ac4f-e884dc888000",
                "name": "Adel Saeed",
                "mobile": "+966508931611",
                "email": "a.saeed@nearpay.io"
            },
            "receipts": [
                {
                    "id": "519a01ef-7c01-4a79-9b60-bc69a7cb2158",
                    "merchant": {
                        "id": "550100105798   ",
                        "name": {
                            "arabic": "شركة تباعد للاتصالات",
                            "english": "NEARPAY "
                        },
                        "address": {
                            "arabic": "أنس بن مالك",
                            "english": "Anas Ibn Malik"
                        },
                        "category_code": "8999"
                    },
                    "type": "purchase",
                    "start_date": "28/09/2023",
                    "start_time": "11:54:49",
                    "card_scheme_sponsor": "BSFB",
                    "tid": "1881001155119328",
                    "system_trace_audit_number": "000687",
                    "pos_software_version_number": "1.0.0",
                    "retrieval_reference_number": "871752000000",
                    "card_scheme": {
                        "name": {
                            "english": "mada",
                            "arabic": "مدى"
                        },
                        "id": "P1"
                    },
                    "transaction_type": {
                        "name": {
                            "arabic": "شراء",
                            "english": "PURCHASE"
                        },
                        "id": "00"
                    },
                    "pan": "5069 68** **** 4655",
                    "card_expiration": "24/04",
                    "amount_authorized": {
                        "label": {
                            "arabic": "مبلغ الشراء",
                            "english": "PURCHASE AMOUNT"
                        },
                        "value": "0.01"
                    },
                    "amount_other": {
                        "label": {
                            "arabic": "مبلغ النقد",
                            "english": "NAQD AMOUNT"
                        },
                        "value": "0.00"
                    },
                    "currency": {
                        "arabic": "",
                        "english": "SAR"
                    },
                    "status_message": {
                        "arabic": "مرفوضة",
                        "english": "ERROR"
                    },
                    "is_approved": false,
                    "is_refunded": false,
                    "is_reversed": false,
                    "approval_code": null,
                    "verification_method": {
                        "english": "NO VERIFICATION REQUIRED",
                        "arabic": "لا يتطلب التحقق"
                    },
                    "end_date": "28/09/2023",
                    "end_time": "11:54:49",
                    "receipt_line_one": {
                        "arabic": "",
                        "english": ""
                    },
                    "receipt_line_two": {
                        "arabic": "",
                        "english": ""
                    },
                    "thanks_message": {
                        "arabic": "شكرا لاستخدامكم مدى",
                        "english": "Thank you for using mada"
                    },
                    "save_receipt_message": {
                        "arabic": "يرجى الاحتفاظ بالفاتورة",
                        "english": "please retain receipt"
                    },
                    "entry_mode": "CONTACTLESS",
                    "action_code": "940",
                    "application_identifier": "A0000002281010",
                    "terminal_verification_result": "0080008000",
                    "transaction_state_information": "0000",
                    "cardholader_verfication_result": "3F0000",
                    "cryptogram_information_data": "80",
                    "application_cryptogram": "36F7E3EA6847D4DD",
                    "kernel_id": "2d",
                    "payment_account_reference": "",
                    "pan_suffix": "",
                    "transaction_uuid": "f2190ab9-3048-4364-a6f7-ce3ce53a3b16",
                    "created_at": "2023-09-28T08:54:49.647Z",
                    "updated_at": "2023-09-28T08:54:49.647Z",
                    "qr_code": "https://api.nearpay.io/ui/receipt/519a01ef-7c01-4a79-9b60-bc69a7cb2158"
                }
            ],
            "customer_reference_number": null
        },

        // Other Transactions
    ],
    "pages": {
        "total": 1024,
        "current": 1
    }
}
`
const code8=`{
    "terminal_id": "74ff2678-6f5d-4d74-b1a2-3ac402687474"
}
`
const code9=`{
    "reconciliation": {
        "receipt": {
            "id": "2fc49db4-7f86-4ad2-a7c3-877b10251ba3",
            "date": "19/11/2023",
            "time": "11:05:54",
            "start_date": "19/11/2023",
            "start_time": "11:05:54",
            "end_date": "19/11/2023",
            "end_time": "11:05:54",
            "merchant": {
                "id": "100000000000001",
                "name": {
                    "arabic": "NearPay Merchant Arabic",
                    "english": "NearPay Merchant"
                },
                "address": {
                    "arabic": "4321",
                    "english": "KAFD"
                },
                "category_code": "0763"
            },
            "card_acceptor_terminal_id": "0209326800093268",
            "pos_software_version_number": "1.0.0",
            "card_scheme_sponsor_id": "ANBB",
            "is_balanced": {
                "label": {
                    "arabic": "مقبولة",
                    "english": "Approved"
                },
                "value": true
            },
            "details": {
                "total": {
                    "label": {
                        "arabic": "المجموع",
                        "english": "Total"
                    },
                    "total": "0.00",
                    "count": 0
                },
                "purchase": {
                    "label": {
                        "arabic": "الشراء",
                        "english": "Purchase"
                    },
                    "total": "0.00",
                    "count": 0
                },
                "purchase_reversal": {
                    "label": {
                        "arabic": "الشراء المعكوسة",
                        "english": "Purchase Reversal"
                    },
                    "total": "0.00",
                    "count": 0
                },
                "refund": {
                    "label": {
                        "arabic": "المستردة",
                        "english": "Refund"
                    },
                    "total": "0.00",
                    "count": 0
                },
                "refund_reversal": {
                    "label": {
                        "arabic": "المستردة المعكوسة",
                        "english": "Refund Reversal"
                    },
                    "total": "0.00",
                    "count": 0
                }
            },
            "schemes": [
                {
                    "name": {
                        "label": {
                            "english": "mada",
                            "arabic": "مدى"
                        },
                        "value": "P1"
                    },
                    "pos": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "host": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "is_balanced": true
                },
                {
                    "name": {
                        "label": {
                            "english": "Visa",
                            "arabic": "فيزا"
                        },
                        "value": "VC"
                    },
                    "pos": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "host": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "is_balanced": true
                },
                {
                    "name": {
                        "label": {
                            "english": "Visa Debit",
                            "arabic": "فيزا مدين"
                        },
                        "value": "VD"
                    },
                    "pos": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "host": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "is_balanced": true
                },
                {
                    "name": {
                        "label": {
                            "english": "MasterCard",
                            "arabic": "ماستر كارد"
                        },
                        "value": "MC"
                    },
                    "pos": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "host": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "is_balanced": true
                },
                {
                    "name": {
                        "label": {
                            "english": "Maestro",
                            "arabic": "مايسترو"
                        },
                        "value": "DM"
                    },
                    "pos": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "host": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "is_balanced": true
                },
                {
                    "name": {
                        "label": {
                            "english": "American Express",
                            "arabic": "امريكان اكسبرس"
                        },
                        "value": "AX"
                    },
                    "pos": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "host": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "is_balanced": true
                },
                {
                    "name": {
                        "label": {
                            "english": "UnionPay",
                            "arabic": "يونيون باي"
                        },
                        "value": "UP"
                    },
                    "pos": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "host": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "is_balanced": true
                },
                {
                    "name": {
                        "label": {
                            "english": "JCB",
                            "arabic": "جي سي بي"
                        },
                        "value": "JC"
                    },
                    "pos": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "host": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "is_balanced": true
                },
                {
                    "name": {
                        "label": {
                            "english": "Discover",
                            "arabic": "ديسكفر"
                        },
                        "value": "DC"
                    },
                    "pos": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "host": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "is_balanced": true
                },
                {
                    "name": {
                        "label": {
                            "english": "GCCNET",
                            "arabic": "الشبكة الخليجية"
                        },
                        "value": "GN"
                    },
                    "pos": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "host": {
                        "credit": {
                            "label": {
                                "arabic": "دائن",
                                "english": "Credit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "debit": {
                            "label": {
                                "arabic": "مدين",
                                "english": "Debit"
                            },
                            "total": "0.00",
                            "count": 0
                        },
                        "total": {
                            "label": {
                                "arabic": "المجموع",
                                "english": "Total"
                            },
                            "total": "0.00",
                            "count": 0
                        }
                    },
                    "is_balanced": true
                }
            ],
            "currency": {
                "arabic": "ر.س",
                "english": "SAR"
            },
            "system_trace_audit_number": "000044",
            "merchant_id": "70fbb41a-ff0f-4dcb-87ce-21918371c92a",
            "device_id": null,
            "client_id": "a265c70b-a543-4817-ad70-1088f10e1ecd",
            "terminal": {
                "id": "ccc258b9-b41f-4a9f-a60c-cdd915ba7189"
            },
            "reconciliation": {
                "id": "2fc49db4-7f86-4ad2-a7c3-877b10251ba3"
            },
            "user_id": null,
            "created_at": "2023-11-19T08:05:54.600Z",
            "updated_at": "2023-11-19T08:05:54.600Z",
            "qr_code": "https://sandbox-api.nearpay.io/ui/reconciliation_receipt/2fc49db4-7f86-4ad2-a7c3-877b10251ba3"
        },
        "performance": [
            {
                "type": "reconciliation_start",
                "time_stamp": 1700381154523
            },
            {
                "type": "saf_processed",
                "time_stamp": 1700381154536
            },
            {
                "type": "update_terminal_status",
                "time_stamp": 1700381154541
            },
            {
                "type": "bucket_build",
                "time_stamp": 1700381154549
            },
            {
                "type": "details_build",
                "time_stamp": 1700381154550
            },
            {
                "type": "created_reconciliation_row",
                "time_stamp": 1700381154554
            },
            {
                "type": "reconciled_transactions",
                "time_stamp": 1700381154557
            },
            {
                "type": "will_add_to_queue",
                "time_stamp": 1700381154557
            },
            {
                "type": "network_start",
                "time_stamp": 1700381154559
            },
            {
                "type": "send",
                "time_stamp": 1700381154559
            },
            {
                "type": "received",
                "time_stamp": 1700381154589
            },
            {
                "type": "network_end",
                "time_stamp": 1700381154590
            },
            {
                "type": "reconciliation_end",
                "time_stamp": 1700381154606
            }
        ],
        "reconciliation": {
            "id": "2fc49db4-7f86-4ad2-a7c3-877b10251ba3",
            "status": "Completed",
            "system_trace_audit_number": "000044",
            "card_acceptor_terminal_id": "0209326800093268",
            "action_code": "500",
            "pos_totals": "05P1INMA000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000VCINMA000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000MCINMA000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000GNINMA000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000AXINMA000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "host_totals": "05P1INMA000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000VCINMA000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000MCINMA000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000GNINMA000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000AXINMA000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "performance": [],
            "total_count": 0,
            "total_value": "0",
            "purchase_count": 0,
            "purchase_value": "0",
            "purchase_reversal_count": 0,
            "purchase_reversal_value": "0",
            "refund_count": 0,
            "refund_value": "0",
            "refund_reversal_count": 0,
            "refund_reversal_value": "0",
            "is_balanced": true,
            "device_id": null,
            "user_id": null,
            "client_id": "a265c70b-a543-4817-ad70-1088f10e1ecd",
            "merchant_id": "70fbb41a-ff0f-4dcb-87ce-21918371c92a",
            "created_at": "2023-11-19T08:05:54.550Z",
            "updated_at": "2023-11-19T08:05:54.593Z",
            "terminal": {
                "id": "ccc258b9-b41f-4a9f-a60c-cdd915ba7189",
                "system_trace_audit_number": 44,
                "transaction_counter": 43,
                "card_acceptor_terminal_id": "0209326800093268",
                "card_acceptor_id_code": "100000000000001",
                "acquirer_institution_identification_code": "588848",
                "merchant_category_code": "0763",
                "lat": "24.76120805256997",
                "lon": "46.64723818660972",
                "merchant_name_english": "NearPay Merchant",
                "merchant_name_arabic": "NearPay Merchant Arabic",
                "currency_code": "682",
                "currency_symbol_arabic": "ر.س",
                "currency_symbol_english": "SAR",
                "currency_exponent": 2,
                "merchant_address_1_arabic": "4321",
                "merchant_address_2_arabic": "",
                "merchant_address_1_english": "KAFD",
                "merchant_address_2_english": "",
                "receipt_line_1_arabic": "",
                "receipt_line_2_arabic": "",
                "receipt_line_1_english": "",
                "receipt_line_2_english": "",
                "ipek": "DCB26A6F9D0236D2BF4336CD77050117",
                "key_set_id": "FFFF",
                "vendor": "02",
                "version": "v1",
                "trsm": "555554",
                "saf_retry_limit": 3,
                "fraud_alert_id": null,
                "p1_aquirer_bank": "INMA",
                "vc_aquirer_bank": "INMA",
                "vd_aquirer_bank": null,
                "mc_aquirer_bank": "INMA",
                "dm_aquirer_bank": null,
                "ax_aquirer_bank": "INMA",
                "up_aquirer_bank": null,
                "jc_aquirer_bank": null,
                "dc_aquirer_bank": null,
                "gn_aquirer_bank": "INMA",
                "request_sent_time": "000000000",
                "response_recevied_time": "000000000",
                "performance_timers_refrence": "000000000000",
                "point_of_service": "71030170334C",
                "admin_pin": "0000",
                "client_id": "a265c70b-a543-4817-ad70-1088f10e1ecd",
                "is_reconciling": false,
                "is_filedownload": false,
                "is_refund_same_card": true,
                "status": "new",
                "environment": "1",
                "geofence": null,
                "created_at": "2023-11-16T08:13:24.252Z",
                "updated_at": "2023-11-19T08:05:54.537Z",
                "is_pulled_out": false,
                "pulled_out_at": null,
                "package_name": null,
                "app_version": null,
                "sdk_version": null
            },
            "package_name": null,
            "app_version": null,
            "sdk_version": null
        }
    }
}
`


  return (
    <div style={{}} className='faq-screen1'>
      <h2 style={{ fontWeight: '600' }}>Merchant API</h2>
      <div style={{minHeight:"100px",fontSize:'14px', padding:'15px',paddingLeft:"25px",paddingRight:"25px",width:'100%' ,border:'1px solid rgba(239,68,68,.2)', backgroundColor:'hsla(0, 86%, 97%, .5)'}}>

      <span >
      <RiErrorWarningFill color='red' size={20} style={{marginRight:"5px"}} />Warning: As a third party connected to nearpay APIs, upon usage, you agree
         to uphold the upmost security standards in accessing and using these APIs. These
          APIs share information that is confidential to you as
         a third party connected to nearpay. This information must be stored and used in a secure manner.</span>

      </div>
      
      <div>
        <h4>Authentication</h4>
        <p>NearPay uses API key as an authentication method.</p>
        <div className='ma1'>
        <h5>Base URL</h5>
        <Snippet style={{backgroundColor:"black",color:'white'}}  >
        https://sandbox-api.nearpay.io/v1/merchants-sdk/ 
        </Snippet>
        </div>
        <div className='ma1'>
        <h5> Terminals</h5>
      <p>In this endpoint comes fetching terminals and disconnecting a particular terminal</p>
        </div>
        <div className='ma1'>
        <h5> List Terminals</h5>
      <p>In this endpoint comes fetching terminals and disconnecting a particular terminal</p>
      <Snippet style={{backgroundColor:"rgba(39, 59, 105, 0.97)",color:'white'}}>
        Request
        GET /terminals
        {}
      </Snippet>

      
      
        </div>
        <div className='ma1'>
          <h5>Responses</h5>
          <Snippet style={{backgroundColor:"black",color:'white', height:'600px',overflowY:'scroll'}}>
            {code1}
          </Snippet>
        </div>
        <div className='ma1'>
          <h5>Find Terminal</h5>
          <p>Request</p>
          <Snippet style={{backgroundColor:"rgba(39, 59, 105, 0.97)",color:'white', paddingTop:'10px' }}>
          GET
          /terminals/terminal_id
          </Snippet>
        </div>
        <div className='ma1'>
          <h5>Responses</h5>
          
          <Snippet style={{backgroundColor:"black",color:'white', height:'600px',overflowY:'scroll'}}>
            {code2}
          </Snippet>
        </div>
        <div className='ma1'>
          
          <p>Request</p>
          <Snippet style={{backgroundColor:"rgba(39, 59, 105, 0.97)",color:'white', paddingTop:'10px' }}>
          PUT
          /terminals/terminal_id/disconnect
          </Snippet>
        </div>
        <div className='ma1'>
          
          <p>Response</p>
          <Snippet style={{backgroundColor:"rgba(12, 12, 12, 0.97)",color:'white', paddingTop:'10px' }}>
         {code3}
          </Snippet>
        </div>
        <div className='ma1'>
          <h5>Users</h5>
          <p>In this endpoint you will be able to assign terminal to an existing user or a new user, additionally, you can unassign a terminal of the user.</p>
          <p>Please note in case of assigning a totally new user, he will be created and assigned, and if the user already exists, he will be assigned to the terminal.</p>
          <p>Unassigning Terminal will only require terminal id to be passed and the linked user will be unassigned. Note that one terminal can only have one user.</p>
          <h5>Assign Terminal</h5>
          <p>Request</p>
          <Snippet style={{backgroundColor:"rgba(39, 59, 105, 0.97)",color:'white', marginTop:'10px', paddingTop:'10px' }}>
         {code4}
          </Snippet>
          <p style={{marginTop:'10px'}}>Response</p>
          <Snippet style={{backgroundColor:"rgba(11, 13, 17, 0.97)",color:'white', marginTop:'10px', paddingTop:'10px' }}>
         {code5}
          </Snippet>
          
        </div>
        <div className='ma1'>
          <h5>UnAssign Terminal</h5>
          <p>Request</p>
          <Snippet style={{backgroundColor:"rgba(24, 63, 122, 0.97)",color:'white', paddingTop:'10px' }}>
          PUT
          /terminals/terminal_id/unassign
          </Snippet>
        </div>
        <div className='ma1'>
          
          <p>Response</p>
          <Snippet style={{backgroundColor:"rgba(28, 29, 31, 0.97)",color:'white', paddingTop:'10px' }}>
         {code6}
          </Snippet>
        </div>
        <div className='ma1'>
          <h5>Transaction</h5>
          <p>In this endpoint comes listing transactions and viewing one transaction full details.

</p>
<h4>List Transaction</h4>
<p>Request</p>
<Snippet style={{backgroundColor:"rgba(34, 56, 105, 0.97)",color:'white', paddingTop:'10px' }}>
GET
/transactions

          </Snippet>
        </div>
        <div className='ma1'>
          
          <p>Response</p>

          <Snippet style={{backgroundColor:"rgba(28, 29, 31, 0.97)",color:'white', height:"500px", paddingTop:'10px', overflowY:'scroll' }}  >
         {code7}
          </Snippet>
        </div>
        <div className='ma1'>
          <h5>Transaction</h5>
          <p>In this endpoint comes listing transactions and viewing one transaction full details.

</p>
<h4>Find Transaction</h4>
<p>Request</p>
<Snippet style={{backgroundColor:"rgba(34, 56, 105, 0.97)",color:'white', paddingTop:'10px' }}>
GET
/transactions/transaction_id

          </Snippet>
        </div>
        <div className='ma1'>
          
          <p>Response</p>

          <Snippet style={{backgroundColor:"rgba(28, 29, 31, 0.97)",color:'white', height:"500px", paddingTop:'10px', overflowY:'scroll' }}  >
         {code7}
          </Snippet>
        </div>
        <div className='ma1'>
          <h5>Reconsilation</h5>
          <p>In this endpoint comes creating a reconciliation and listing previous reconciliations

</p>
<p>We need to pass the terminal_id in order to perform the reconciliation</p>
<h4>Create Reconsilation</h4>
<p>Request</p>
<Snippet style={{backgroundColor:"rgba(34, 56, 105, 0.97)",color:'white', paddingTop:'10px' }}>
POST
/reconciliations
{code8}
          </Snippet>
        </div>
        <div className='ma1'>
          
          <p>Response</p>

          <Snippet style={{backgroundColor:"rgba(28, 29, 31, 0.97)",color:'white', height:"500px", paddingTop:'10px', overflowY:'scroll' }}  >
         {code7}
          </Snippet>
        </div>
        
      </div>

      <div className='Quick-btn'>
        <button>Next</button>
      </div>
      
    </div>
  )
}

export default Screen1