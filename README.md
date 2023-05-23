# DerpDex V3 Subgraph

### Subgraph Endpoint 

Synced at: [THEGRAPH](https://api.thegraph.com/subgraphs/name/3700rpm/zksync-dex)

Pending Changes at same URL

## Deployment

### Initialize the project

```bash
  yarn install
```

### Change the subgraph.yaml: [Updated already to current testnet addresses]
```
1. Factory
2. NonfungiblePositionManager

```
### Deployment [On package.json directly]

```bash
1.0: run codegen
2.0: run build
3.0: run auth !! Replace THEGRAPH_API_KEY with the given key
4.0: run deployV3 !! Replace the YOUR_PROFILE/GRAPH_REPOSITORY to your endpoint
    4.1: Example: "graph deploy --product hosted-service YOUR_PROFILE/GRAPH_REPOSITORY",
    4.2: Changed: "graph deploy --product hosted-service 3700rpm/zksync-dex",
```