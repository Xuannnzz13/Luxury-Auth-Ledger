var Contracts = {
  LuxuryAuthContract: {
    abi: [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [{ "indexed": true, "internalType": "address", "name": "brand", "type": "address" }],
        "name": "BrandAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [{ "indexed": true, "internalType": "address", "name": "brand", "type": "address" }],
        "name": "BrandRemoved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          { "indexed": false, "internalType": "string", "name": "serialNo", "type": "string" },
          { "indexed": false, "internalType": "bool", "name": "flagged", "type": "bool" }
        ],
        "name": "FlagUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          { "indexed": false, "internalType": "string", "name": "serialNo", "type": "string" },
          { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
          { "indexed": true, "internalType": "address", "name": "to", "type": "address" },
          { "indexed": false, "internalType": "uint256", "name": "amountPaid", "type": "uint256" }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          { "indexed": false, "internalType": "string", "name": "serialNo", "type": "string" },
          { "indexed": true, "internalType": "address", "name": "brand", "type": "address" },
          { "indexed": true, "internalType": "address", "name": "firstOwner", "type": "address" }
        ],
        "name": "ProductRegistered",
        "type": "event"
      },
      {
        "inputs": [
          { "internalType": "string", "name": "serialNo", "type": "string" }
        ],
        "name": "getProduct",
        "outputs": [
          { "internalType": "bool", "name": "exists", "type": "bool" },
          { "internalType": "string", "name": "serialOut", "type": "string" },
          { "internalType": "address", "name": "issuerBrand", "type": "address" },
          { "internalType": "string", "name": "ownerName", "type": "string" },
          { "internalType": "address", "name": "ownerWallet", "type": "address" },
          { "internalType": "uint256", "name": "registeredAt", "type": "uint256" },
          { "internalType": "string", "name": "metadataHash", "type": "string" },
          { "internalType": "bool", "name": "flagged", "type": "bool" }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          { "internalType": "string", "name": "serialNo", "type": "string" },
          { "internalType": "string", "name": "ownerName", "type": "string" },
          { "internalType": "address", "name": "ownerWallet", "type": "address" },
          { "internalType": "string", "name": "metadataHash", "type": "string" }
        ],
        "name": "registerProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          { "internalType": "string", "name": "serialNo", "type": "string" },
          { "internalType": "string", "name": "newOwnerName", "type": "string" },
          { "internalType": "address", "name": "newOwnerWallet", "type": "address" },
          { "internalType": "uint256", "name": "amountPaid", "type": "uint256" }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    address: "0x5f55bb294be4f7be7c4b07d55f43abd247aeaf57"
  }
};

/* ===============================
   ETHERS HELPERS
=============================== */
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
function getReadOnlyProvider() {
  return new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");
}

function getReadOnlyContract() {
  const provider = getReadOnlyProvider();
  return new ethers.Contract(
    Contracts.LuxuryAuthContract.address,
    Contracts.LuxuryAuthContract.abi,
    provider
  );
}

// expose it
window.getReadOnlyContract = getReadOnlyContract;



function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* ===============================
   PUBLIC URL (NO LOCALHOST)
=============================== */
const PUBLIC_BASE_URL =
  "https://xuannnzz13.github.io/Luxury-Auth-Ledger/";

/* ===============================
   QR + DEEP LINK
=============================== */
function buildVerifyLink(serial) {
  if (!serial) throw new Error("Serial required");

  const base = PUBLIC_BASE_URL.toLowerCase();
  if (
    base.includes("localhost") ||
    base.includes("127.0.0.1") ||
    base.startsWith("file://")
  ) {
    throw new Error("QR must use a public URL (GitHub Pages)");
  }

  return `${PUBLIC_BASE_URL}?tab=verify&serial=${encodeURIComponent(serial)}&v=99`;
}

function generateVerifyQR(serial, qrDivId = "qrcode", linkSpanId = "qrLinkText") {
  const link = buildVerifyLink(serial);

  const linkEl = document.getElementById(linkSpanId);
  if (linkEl) linkEl.textContent = link;

  const qrEl = document.getElementById(qrDivId);
  qrEl.innerHTML = "";
  new QRCode(qrEl, {
    text: link,
    width: 180,
    height: 180
  });

  return link;
}

function applyDeepLink(openTabFn) {
  const tab = qs("tab");
  const serial = qs("serial");

  if (tab && typeof openTabFn === "function") {
    openTabFn(tab);
  }
  if (serial && document.getElementById("verSerial")) {
    document.getElementById("verSerial").value = serial;
  }
}

/* ===============================
   EXPORT TO WINDOW
=============================== */
window.getContract = getContract;
window.getProviderAndSigner = getProviderAndSigner;
window.generateVerifyQR = generateVerifyQR;
window.applyDeepLink = applyDeepLink;

console.log("LuxuryAuth.js loaded ✅");


