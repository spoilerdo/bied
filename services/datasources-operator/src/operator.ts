import Operator, {
  ResourceEventType,
  ResourceEvent,
} from "@dot-i/k8s-operator";

export default class MyOperator extends Operator {
  protected async init() {
    // NOTE: we pass the plural name of the resource
    await this.watchResource(
      "dot-i.com",
      "v1",
      "mycustomresources",
      async (e) => {
        try {
          switch (e.type) {
            case ResourceEventType.Added:
              await this.resourceAdded(e);
              break;
            case ResourceEventType.Modified:
              await this.resourceModified(e);
              break;
            case ResourceEventType.Deleted:
              this.resourceDeleted(e);
              break;
          }
        } catch (err) {
          // Log here...
        }
      }
    );
  }

  private async resourceAdded(e: ResourceEvent) {
    const object = e.object;
    const metadata = object.metadata;

    console.log("metadata", metadata);
  }

  private async resourceModified(e: ResourceEvent) {
    const object = e.object;
    const metadata = object.metadata;

    console.log("metadata", metadata);
    // if (
    //   !object.status ||
    //   object.status.observedGeneration !== metadata.generation
    // ) {
    //   // TODO: handle resource modification here

    //   await this.setResourceStatus(e.meta, {
    //     observedGeneration: metadata.generation,
    //   });
    // }
  }

  private async resourceDeleted(e: ResourceEvent) {
    // TODO: handle resource deletion here
    console.log("metadata", e.object.metadata);
  }
}
