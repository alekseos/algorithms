class Stack {
    protected _s: any[];

	public createStack () {
		this._s = [];
		
		return this;
	}

	public push (v: any) {
		this._s.push(v);
	}

	public pop () {
		return this._s.pop();
	}

	public top () {
		return this._s[this._s.length - 1];
	}

	public isStackEmpty() {
		return !!this._s.length;
	}
}