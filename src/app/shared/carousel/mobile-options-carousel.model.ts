export class MobileOptions {
  constructor(
    public mobileItems: MobileOptionsItems,
    public tabletItems: MobileOptionsItems,
    public desktopItems: MobileOptionsItems
  ) { }
}

export class MobileOptionsItems {
  constructor(
    public maxSize: number,
    public items: number
  ) { }
}