import {
  Address,
  BigInt,
} from "@graphprotocol/graph-ts"
  
// Initialize a Token Definition with the attributes
export class StaticTokenDefinition {
  address : Address
  symbol: string
  name: string
  decimals: BigInt

  // Initialize a Token Definition with its attributes
  constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
    this.address = address
    this.symbol = symbol
    this.name = name
    this.decimals = decimals
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<StaticTokenDefinition> {
    let staticDefinitions = new Array<StaticTokenDefinition>(6)

    // Add zKPepe
    let tokenzkPepe = new StaticTokenDefinition(
      Address.fromString('0x49d532498ff8a6835E9bF537B22D416C05EacCC9'),
      'zKPepe',
      'zKPepe',
      BigInt.fromI32(9)
    )
    staticDefinitions.push(tokenzkPepe)

        // Add zKPepe
    let tokenWBTC = new StaticTokenDefinition(
      Address.fromString('0xE6E3854A3dF24043890BB5376DEbFA178C56a011'),
      'zKPepe',
      'zKPepe',
      BigInt.fromI32(9)
    )
    staticDefinitions.push(tokenWBTC)

    return staticDefinitions
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address) : StaticTokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions()
    let tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i]
      if(staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }

}