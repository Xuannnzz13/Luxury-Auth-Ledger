var Contracts = { LuxuryAuthContract:  {
    abi: [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "brand",
				"type": "address"
			}
		],
		"name": "BrandAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "brand",
				"type": "address"
			}
		],
		"name": "BrandRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "serialNo",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "flagged",
				"type": "bool"
			}
		],
		"name": "FlagUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "serialNo",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountPaid",
				"type": "uint256"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "serialNo",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "brand",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "firstOwner",
				"type": "address"
			}
		],
		"name": "ProductRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "brand",
				"type": "address"
			}
		],
		"name": "addBrand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "serialNo",
				"type": "string"
			}
		],
		"name": "getOwnershipHistory",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "serialNo",
				"type": "string"
			}
		],
		"name": "getProduct",
		"outputs": [
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "serialOut",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "issuerBrand",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "ownerName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "ownerWallet",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "registeredAt",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "metadataHash",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "flagged",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isBrand",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mintCoins",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "serialNo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ownerName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "ownerWallet",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "metadataHash",
				"type": "string"
			}
		],
		"name": "registerProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "brand",
				"type": "address"
			}
		],
		"name": "removeBrand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "sendCoins",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "serialNo",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "value",
				"type": "bool"
			}
		],
		"name": "setFlag",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "serialNo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "newOwnerName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "newOwnerWallet",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amountPaid",
				"type": "uint256"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
],
    address: "0x5f55bb294be4f7be7c4b07d55f43abd247aeaf57",
    endpoint: "sepolia.infura.io"
   }}


async function getProviderAndSigner() {
  if (!window.ethereum) throw new Error("MetaMask not found");
  const provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();
  return { provider, signer };
}

async function getContract() {
  const { signer } = await getProviderAndSigner();
  return new ethers.Contract(
    Contracts.LuxuryAuthContract.address,
    Contracts.LuxuryAuthContract.abi,
    signer
  );
}


function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}
// ===============================
// QR + Verify Tab Deep-Link Support
// ===============================

// 🔴 CHANGE THIS to a REAL URL (GitHub Pages / Netlify / your IP)
const PUBLIC_BASE_URL = "https://YOUR_USERNAME.github.io/YOUR_REPO/LuxuryAuth.html";
// example:
// const PUBLIC_BASE_URL = "https://xixuanleong.github.io/luxury-auth/LuxuryAuth.html";

function buildVerifyLink(serial) {
  if (!serial) throw new Error("Serial number required");

  const base = PUBLIC_BASE_URL.trim().toLowerCase();

  // Safety check: block localhost / file
  if (
    base.includes("localhost") ||
    base.includes("127.0.0.1") ||
    base.startsWith("file://")
  ) {
    throw new Error(
      "QR link is LOCAL. Use GitHub Pages / Netlify / real http(s) URL."
    );
  }

  return `${PUBLIC_BASE_URL}?tab=verify&serial=${encodeURIComponent(serial)}`;
}

function generateVerifyQR(serial, qrDivId = "qrcode", linkSpanId = "vlink") {
  const link = buildVerifyLink(serial);

  // Show link text
  const linkEl = document.getElementById(linkSpanId);
  if (linkEl) linkEl.textContent = link;

  // Generate QR
  const qrEl = document.getElementById(qrDivId);
  qrEl.innerHTML = "";
  new QRCode(qrEl, {
    text: link,
    width: 180,
    height: 180
  });

  return link;
}

// Auto-open Verify tab + autofill serial when QR is scanned
function applyDeepLink(openTabFn) {
  const tab = qs("tab");
  const serial = qs("serial");

  if (tab && typeof openTabFn === "function") {
    openTabFn(tab);
  }

  if (serial) {
    const input =
      document.getElementById("verSerial") ||
      document.getElementById("verifySerial");

    if (input) input.value = serial;
  }
}

// Expose globally
window.generateVerifyQR = generateVerifyQR;
window.applyDeepLink = applyDeepLink;

console.log("LuxuryAuth.js loaded ✅");
